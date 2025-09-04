---
title: 鍛冶場、煉丹房開發路線圖
description: 鍛冶場、煉丹房開發路線圖
aside: true
outline: [2, 3]
sidebar: false
borderless: true
tags:
    - Forge Roadmap
    - forge roadmap
---

## {{ $frontmatter.title }}

### 鍛冶場 - 裝備 - 武器
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 鍛冶場 - 裝備 - 武器
    A[唐門小劍<br>需要：無]
    B[唐門菁英小劍<br>需要：裝備等級5<br>門派規模2]
    C[唐門傳承小劍<br>需要：裝備等級10<br>門派規模2]
    D[殺魚刀<br>需要：裝備等級5<br>門派規模2]
    E[玉霄神匕<br>需要：裝備等級10]
  end

  %% 升級箭頭（黃色）+ 文字
  A --> B
  B --> C
  A --> D
  A --> E

  %% 退還箭頭（綠色）+ 文字
  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  C -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| B
  D -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  E -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  
  %% 自訂箭頭樣式與文字顏色
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% 設定節點樣式
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF


```

---

### 鍛冶場 - 裝備 - 防具
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 鍛冶場 - 裝備 - 防具
    A[唐門制服<br>需要：無]
    B[輕量化<br>需要：裝備等級5<br>門派規模2]
    C[護心鏡<br>需要：裝備等級10<br>門派規模2]
    D[密密縫<br>需要：裝備等級10<br>門派規模3]
    E[牛皮制服<br>需要：裝備等級10<br>門派規模2]
  end

  %% 升級箭頭（黃色）+ 文字
  A --> B
  A --> C
  A --> D
  A --> E

  %% 退還箭頭（綠色）+ 文字
  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  C -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  D -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  E -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  
  %% 自訂箭頭樣式與文字顏色
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% 設定節點樣式
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```

---

### 鍛冶場 - 暗器 - 平射
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 鍛冶場 - 暗器 - 平射
    A[脫手鏢<br>需要：無]
    B[飛梭<br>需要：裝備等級5<br>門派規模2]
    C[無形箭<br>需要：裝備等級10<br>門派規模3]
    D[鐵橄欖<br>需要：裝備等級10<br>門派規模2]
  end

  %% 升級箭頭（黃色）+ 文字
  A --> B
  B --> C
  A --> D

  %% 退還箭頭（綠色）+ 文字
  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  C -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| B
  D -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  
  %% 自訂箭頭樣式與文字顏色
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% 設定節點樣式
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```

---

### 鍛冶場 - 暗器 - 拋射
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 鍛冶場 - 暗器 - 拋射
    A[鞭炮<br>需要：無]
    B[流星箭<br>需要：裝備等級5<br>門派規模2]
    C[雷火彈<br>需要：裝備等級10<br>門派規模3]
    D[神奇球<br>需要：裝備等級10<br>門派規模2]
  end

  %% 升級箭頭（黃色）+ 文字
  A --> B
  B --> C
  A --> D

  %% 退還箭頭（綠色）+ 文字
  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  C -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| B
  D -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  
  %% 自訂箭頭樣式與文字顏色
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% 設定節點樣式
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```

---

### 鍛冶場 - 暗器 - 陷阱
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 鍛冶場 - 暗器 - 陷阱
    A[似草針<br>需要：無]
    B[地鳴雷<br>需要：裝備等級10<br>門派規模2]
  end

  %% 升級箭頭（黃色）+ 文字
  A --> B

  %% 退還箭頭（綠色）+ 文字
  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  
  %% 自訂箭頭樣式與文字顏色
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% 設定節點樣式
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```

### 煉丹房 - 毒物
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 煉丹房 - 毒物
    A[赤煉砂<br>需要：無]
    B[烏水仙<br>需要：裝備等級5<br>門派規模2]
    C[三陰蟲草膠<br>需要：裝備等級10<br>門派規模2]
    D[彼岸仙香<br>需要：裝備等級5<br>門派規模2]
  end

  %% 升級箭頭（黃色）+ 文字
  A --> B
  A --> C
  A --> D

  %% 退還箭頭（綠色）+ 文字
  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  C -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  D -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  
  %% 自訂箭頭樣式與文字顏色
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% 設定節點樣式
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF


```

### 煉丹房 - 靈丹
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph 煉丹房 - 靈丹
    A[南螫礜石散<br>需要：無]
    B[穿心龍膽湯<br>需要：無]
    C[乖乖水<br>需要：無]
    D[胡椒粉丸<br>需要：門派規模2]
    E[睡單<br>需要：無]
  end

  A --> B
  A --> C
  B --> D
  A --> E

  B -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  C -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A
  D -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| B
  E -.->|<font color='#00FF00'>退還消耗鍛造點、貨幣90%</font>| A

  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```