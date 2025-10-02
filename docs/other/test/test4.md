---
aside: false
borderless: false
title: 測試頁4
tags:
    - 測試
---

# 夢境心上人

## 測試一

可隨頁面寬度換行，搜尋功能未實作。

<div style="display: flex; flex-wrap: wrap;">
    <div>
        <table>
            <tr><td><Girl4Icon :size="`medium`"></Girl4Icon></td></tr>
            <tr><td style="text-align: center;">上官螢</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl8Icon :size="`medium`"></Girl8Icon></td></tr>
            <tr><td style="text-align: center;">龍湘</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl3Icon :size="`medium`"></Girl3Icon></td></tr>
            <tr><td style="text-align: center;">虞小梅</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl5Icon :size="`medium`"></Girl5Icon></td></tr>
            <tr><td style="text-align: center;">夏侯蘭</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl2Icon :size="`medium`"></Girl2Icon></td></tr>
            <tr><td style="text-align: center;">葉雲裳</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl0Icon :size="`medium`"></Girl0Icon></td></tr>
            <tr><td style="text-align: center;">唐默鈴</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl7Icon :size="`medium`"></Girl7Icon></td></tr>
            <tr><td style="text-align: center;">魏菊</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl6Icon :size="`medium`"></Girl6Icon></td></tr>
            <tr><td style="text-align: center;">郁竹</td></tr>
        </table>
    </div>
    <div>
        <table>
            <tr><td><Girl1Icon :size="`medium`"></Girl1Icon></td></tr>
            <tr><td style="text-align: center;">瑞杏</td></tr>
        </table>
    </div>
</div>

如果有搜尋功能，也許在table內弄隱藏第三行塞關鍵字？

<div>
    <table>
        <tr><td><Girl4Icon :size="`medium`"></Girl4Icon></td></tr>
        <tr><td style="text-align: center;">上官螢</td></tr>
        <tr><td style="text-align: center;">上官世家、滄幫<br>(這格要隱藏)</td></tr>
    </table>
</div>

## 測試二

失敗作，換不了行。

<BTable :horizontal=true>
    <tr>
        <td :unsortable=true><Girl4Icon :size="`medium`"></Girl4Icon></td>
        <td :unsortable=true>上官螢</td>
    </tr>
    <tr>
        <td><Girl8Icon :size="`medium`"></Girl8Icon></td>
        <td>龍湘</td>
    </tr>
    <tr>
        <td><Girl3Icon :size="`medium`"></Girl3Icon></td>
        <td>虞小梅</td>
    </tr>
    <tr>
        <td><Girl5Icon :size="`medium`"></Girl5Icon></td>
        <td>夏侯蘭</td>
    </tr>
    <tr>
        <td><Girl2Icon :size="`medium`"></Girl2Icon></td>
        <td>葉雲裳</td>
    </tr>
    <tr>
        <td><Girl0Icon :size="`medium`"></Girl0Icon></td>
        <td>唐默鈴</td>
    </tr>
    <tr>
        <td><Girl7Icon :size="`medium`"></Girl7Icon></td>
        <td>魏菊</td>
    </tr>
    <tr>
        <td><Girl6Icon :size="`medium`"></Girl6Icon></td>
        <td>郁竹</td>
    </tr>
    <tr>
        <td><Girl1Icon :size="`medium`"></Girl1Icon></td>
        <td>瑞杏</td>
    </tr>
</BTable>
