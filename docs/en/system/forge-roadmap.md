---
title: Forging & Alchemy Development Roadmap
description: Forging & Alchemy Development Roadmap
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
    A[Tang Sect Short Sword<br>Requires: None]
    B[Tang Sect Elite Short Sword<br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Tang Sect Legacy Short Sword<br>Requires: Equipment Lv 10<br>Sect Scale 2]
    D[Fish-Slaughtering Knife<br>Requires: Equipment Lv 5<br>Sect Scale 2]
    E[Yuxiao Divine Dagger<br>Requires: Equipment Lv 10]
  end

  A --> B
  B --> C
  A --> D
  A --> E

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  E -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#FFD700,stroke-width:2px
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 6 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 7 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style E stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF


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
  subgraph Forge - Hidden Weapons - Straight Throw
    A[Hand-Released Dart<br>Requires: None]
    B[Flying Shuttle<br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Invisible Arrow<br>Requires: Equipment Lv 10<br>Sect Scale 3]
    D[Iron Olive<br>Requires: Equipment Lv 10<br>Sect Scale 2]
  end

  A --> B
  B --> C
  A --> D

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style C stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF
  style D stroke:#FFF,stroke-width:2px,fill:#000,color:#FFF

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
    A[Hand-Released Dart<br>Requires: None]
    B[Flying Shuttle<br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Invisible Arrow<br>Requires: Equipment Lv 10<br>Sect Scale 3]
    D[Iron Olive<br>Requires: Equipment Lv 10<br>Sect Scale 2]
  end

  A --> B
  B --> C
  A --> D

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

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
    A[Firecracker<br>Requires: None]
    B[Meteor Arrow<br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Thunderfire Bomb<br>Requires: Equipment Lv 10<br>Sect Scale 3]
    D[Miracle Orb<br>Requires: Equipment Lv 10<br>Sect Scale 2]
  end

  A --> B
  B --> C
  A --> D

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

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
    A[Herb-Like Needle<br>Requires: None]
    B[Ground-Thunder Mine<br>Requires: Equipment Lv 10<br>Sect Scale 2]
  end

  A --> B

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

  classDef default padding:15px,margin:10px,fill:#000,color:#FFF
  style A stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF
  style B stroke:#FFF,stroke-width:2px,padding:15px,margin:10px,fill:#000,color:#FFF


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
    A[Scarlet Smelting Sand<br>Requires: None]
    B[Black Narcissus<br>Requires: Equipment Lv 5<br>Sect Scale 2]
    C[Triple-Yin Cordyceps Paste<br>Requires: Equipment Lv 10<br>Sect Scale 2]
    D[Other Shore Immortal Incense<br>Requires: Equipment Lv 5<br>Sect Scale 2]
  end

  A --> B
  A --> C
  A --> D

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  
  linkStyle 0 stroke:#FFD700,stroke-width:2px
  linkStyle 1 stroke:#FFD700,stroke-width:2px
  linkStyle 2 stroke:#FFD700,stroke-width:2px
  linkStyle 3 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 4 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5
  linkStyle 5 stroke:#00FF00,stroke-width:2px,stroke-dasharray:5,5

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
    A[Nan Chi Yushi Powder / Southern Venom Arsenic Powder<br>Requires: None]
    B[Heart-Piercing Gentian Decoction<br>Requires: None]
    C[Obedience Water<br>Requires: None]
    D[Pepper Powder Pellet<br>Requires: Sect Scale 2]
    E[Sleep Talisman<br>Requires: None]
  end

  A --> B
  A --> C
  B --> D
  A --> E

  B -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  C -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A
  D -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| B
  E -.->|<font color='#00FF00'>Refunds 90% of spent Forging Points & Currency</font>| A

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