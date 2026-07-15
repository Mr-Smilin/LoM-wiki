---
aside: false
borderless: false
title: テストページ4
tags:
    - テスト
---

# 夢境の想い人

## テスト1

ページの幅に応じて改行でき、検索機能はまだ実装されていません。

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

検索機能があれば、テーブル内の第3行にキーワードを隠すといいかもしれません。

<div>
    <table>
        <tr><td><Girl4Icon :size="`medium`"></Girl4Icon></td></tr>
        <tr><td style="text-align: center;">上官螢</td></tr>
        <tr><td style="text-align: center;">上官世家、滄幫<br>(この行は隠すべき)</td></tr>
    </table>
</div>

## テスト2

失敗作。改行ができません。

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
