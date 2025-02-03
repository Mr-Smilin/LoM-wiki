const sharp = require("sharp");
const fs = require("fs/promises");
const path = require("path");

/**
 * 將指定目錄下的圖片轉換為 WebP 格式
 * @param {string} sourceDir - 來源目錄路徑
 * @param {Object} options - 選項
 * @param {number} options.quality - WebP 品質 (1-100)
 * @param {boolean} options.deleteOriginal - 是否刪除原始檔案
 * @param {boolean} options.skipExisting - 是否跳過已存在的檔案
 * @param {boolean} options.forceOverwrite - 是否強制覆蓋已存在的檔案
 * @returns {Promise<void>}
 */
async function convertToWebp(sourceDir, options = {}) {
  const {
    quality = 75,
    deleteOriginal = false,
    skipExisting = false,
    forceOverwrite = false,
  } = options;

  try {
    // 確認來源目錄存在
    await fs.access(sourceDir);

    // 遞迴處理所有子目錄
    await processDirectory(sourceDir);

    console.log("轉換完成！");
  } catch (error) {
    console.error("發生錯誤:", error);
  }

  /**
   * 遞迴處理目錄
   * @param {string} currentDir - 當前處理的目錄
   */
  async function processDirectory(currentDir) {
    // 取得目錄內容
    const items = await fs.readdir(currentDir, { withFileTypes: true });

    // 遍歷目錄內容
    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);

      if (item.isDirectory()) {
        // 如果是目錄，遞迴處理
        await processDirectory(fullPath);
      } else if (item.isFile()) {
        // 如果是檔案，檢查是否為支援的圖片格式
        const ext = path.extname(item.name).toLowerCase();
        if ([".jpg", ".jpeg", ".png"].includes(ext)) {
          // 執行轉換
          await convertImage(fullPath, currentDir);
        }
      }
    }
  }

  /**
   * 轉換單一圖片
   * @param {string} imagePath - 圖片路徑
   * @param {string} outputDir - 輸出目錄
   */
  async function convertImage(imagePath, outputDir) {
    try {
      // 檢查目標 WebP 檔案是否已存在
      const webpPath = path.join(
        outputDir,
        `${path.basename(imagePath, path.extname(imagePath))}.webp`
      );

      try {
        await fs.access(webpPath);
        // 如果檔案存在
        if (skipExisting) {
          // console.log(`跳過已存在的檔案: ${webpPath}`);
          return;
        } else if (!forceOverwrite) {
          console.log(`檔案已存在且未設定強制覆蓋: ${webpPath}`);
          return;
        }
      } catch (error) {
        // 檔案不存在，可以繼續處理
      }

      console.log(`正在處理: ${imagePath}`);

      // 使用 sharp 轉換圖片
      await sharp(imagePath).webp({ quality: quality }).toFile(webpPath);

      // 如果設定要刪除原始檔案
      if (deleteOriginal) {
        await fs.unlink(imagePath);
        console.log(`已刪除原始檔案: ${imagePath}`);
      }
    } catch (error) {
      console.error(`處理 ${imagePath} 時發生錯誤:`, error);
    }
  }
}

const sourcePath = path.join(__dirname, "..", "docs", "public", "images");

convertToWebp(sourcePath, {
  quality: 85, // 設定 WebP 品質為 85
  deleteOriginal: true, // 刪除原始檔案
  skipExisting: true, // 跳過已存在的檔案
  forceOverwrite: false, // 不強制覆蓋
}).then(() => console.log("webp轉換完成"));
