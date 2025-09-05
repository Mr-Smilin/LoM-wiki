---
title: Forge & Alchemy Room Development Roadmap
description: Forge & Alchemy Room Development Roadmap
aside: true
outline: [2, 3]
sidebar: false
borderless: true
tags:
    - Forge Roadmap
    - forge roadmap
---

## {{ $frontmatter.title }}

### Forge - Equipment - Weapons
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Forge - Equipment - Weapons
    A[Tang Sect Short Sword<img src="/LoM-wiki/images/items/swords/icon_sword_01.webp"><br>Requires: None]
    B[Tang Sect Elite Short Sword<img src="/LoM-wiki/images/items/swords/icon_sword_10.webp"><br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Tang Sect Legacy Short Sword<img src="/LoM-wiki/images/items/swords/icon_sword_20.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 2]
    D[Fish-Slaughtering Knife<img src="/LoM-wiki/images/items/swords/icon_sword_11.webp"><br>Requires: Equipment Lv 5<br>Sect Scale 2]
    E[Yuxiao Divine Dagger<img src="/LoM-wiki/images/items/swords/icon_sword_21.webp"><br>Requires: Equipment Lv 10]
    F[Liquan Small Sword<img src="/LoM-wiki/images/items/swords/icon_sword_22.webp"><br>Requirement: Equipment Lv 10<br>Sect Scale 2]
  end

  %% Upgrade Arrows (Yellow) + Text
  A --> B
  B --> C
  A --> D
  A --> E
  B --> F
  
  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  E -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  F -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  
  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#FFD700,stroke-width:2px
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 8 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 9 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style F stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF


```

---

### Forge - Equipment - Armor
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Forge - Equipment - Armor
    A[Tangmen Uniform<img src="/LoM-wiki/images/items/equips/icon_equip_01.webp"><br>Requirement: None]
    B[Lightweight<img src="/LoM-wiki/images/items/equips/icon_equip_11.webp"><br>Requirement: Equipment Level 5<br>Faction Scale 2]
    C[Heart Protector<img src="/LoM-wiki/images/items/equips/icon_equip_10.webp"><br>Requirement: Equipment Level 10<br>Faction Scale 2]
    D[Dense Stitching<img src="/LoM-wiki/images/items/equips/icon_equip_20.webp"><br>Requirement: Equipment Level 10<br>Faction Scale 3]
    E[Cowhide Uniform<img src="/LoM-wiki/images/items/equips/icon_equip_22.webp"><br>Requirement: Equipment Level 10<br>Faction Scale 2]
    F[Paper Armor<img src="/LoM-wiki/images/items/equips/icon_equip_21.webp"><br>Requirement: Equipment Level 10<br>Faction Scale 3]
  end

  %% Upgrade Arrows (Yellow) + Text
  A --> B
  A --> C
  A --> D
  A --> E
  B --> F

  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| A
  D -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| A
  E -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| A
  F -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| B
  
  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#FFD700,stroke-width:2px
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 8 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 9 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% Node Style Settings
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style F stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```

---

### Forge - Hidden Weapons - Straight Throw
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Forge - Hidden Weapons - Straight Throw
    A[Hand-Released Dart<img src="/LoM-wiki/images/items/knifes/icon_knife_01.webp"><br>Requires: None]
    B[Flying Shuttle<img src="/LoM-wiki/images/items/knifes/icon_knife_11.webp"><br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Invisible Arrow<img src="/LoM-wiki/images/items/knifes/icon_knife_21.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 3]
    D[Iron Olive<img src="/LoM-wiki/images/items/knifes/icon_knife_10.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 2]
  end
  
  %% Upgrade Arrows (Yellow) + Text
  A --> B
  B --> C
  A --> D

  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% Node Style Settings
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF

```

---

### Forge - Hidden Weapons - Lobbed Throw
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Forge - Hidden Weapons - Lobbed Throw
    A[Firecracker<img src="/LoM-wiki/images/items/balls/icon_ball_01.webp"><br>Requires: None]
    B[Meteor Arrow<img src="/LoM-wiki/images/items/balls/icon_ball_11.webp"><br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Thunderfire Bomb<img src="/LoM-wiki/images/items/balls/icon_ball_20.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 3]
    D[Miracle Orb<img src="/LoM-wiki/images/items/balls/icon_ball_10.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 2]
  end

  %% Upgrade Arrows (Yellow) + Text
  A --> B
  B --> C
  A --> D

  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  
  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% Node Style Settings
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF


```

---

### Forge - Hidden Weapons - Traps
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Forge - Hidden Weapons - Traps
    A[Herb-Like Needle<img src="/LoM-wiki/images/items/traps/icon_trap_01.webp"><br>Requires: None]
    B[Ground-Thunder Mine<img src="/LoM-wiki/images/items/traps/icon_trap_10.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 2]
    C[Fierce Fire Oil Tank<img src="/LoM-wiki/images/items/traps/icon_trap_11.webp"><br>Requirement: Equipment Lv 10<br>Sect Scale 2]
  end

  %% Upgrade Arrows (Yellow) + Text
  A --> B
  A --> C

  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of consumed forging points and currency</font>| A
  
  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% Node Style Settings
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF


```

### Alchemy Room - Poisons
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Alchemy Room - Poisons
    A[Scarlet Smelting Sand<img src="/LoM-wiki/images/items/poisons/icon_poison_01.webp"><br>Requires: None]
    B[Black Narcissus<img src="/LoM-wiki/images/items/poisons/icon_poison_10.webp"><br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Triple-Yin Cordyceps Paste<img src="/LoM-wiki/images/items/poisons/icon_poison_11.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 2]
    D[Other Shore Immortal Incense<img src="/LoM-wiki/images/items/poisons/icon_poison_20.webp"><br>Requires: Equipment Lv 10<br>Sect Scale 3]
  end

  %% Upgrade Arrows (Yellow) + Text
  A --> B
  A --> C
  A --> D

  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% Node Style Settings
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF


```

### Alchemy Room - Elixirs
```mermaid
%%{init: {
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 80,
    'theme': 'dark'
  }
} }%%
graph TB
  subgraph Alchemy Room - Elixirs
    A[Nan Chi Yushi Powder / Southern Venom Arsenic Powder<img src="/LoM-wiki/images/items/medis/icon_medi_01.webp"><br>Requires: None]
    B[Heart-Piercing Gentian Decoction<img src="/LoM-wiki/images/items/medis/icon_medi_02.webp"><br>Requires: None]
    C[Obedience Water<img src="/LoM-wiki/images/items/medis/icon_medi_04.webp"><br>Requires: None]
    D[Pepper Powder Pellet<img src="/LoM-wiki/images/items/medis/icon_medi_03.webp"><br>Requires: Sect Scale 2]
    E[Sleep Talisman<img src="/LoM-wiki/images/items/medis/icon_medi_05.webp"><br>Requires: None]
  end

  %% Upgrade Arrows (Yellow) + Text
  A --> B
  A --> C
  B --> D
  A --> E

  %% Refund Arrows (Green) + Text
  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  E -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A

  %% Custom Arrow Styles and Text Colors
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  %% Node Style Settings
  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF

```