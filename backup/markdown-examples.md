# Markdown 擴充範例

本頁面示範了 VitePress 提供的一些內建 Markdown 擴充功能。

## 語法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 提供支援的語法突出顯示，以及行突出顯示等附加功能：

**輸入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**輸出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 客製化容器

**輸入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**輸出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 更多內容

查看 [Markdown 擴充功能的完整清單](https://vitepress.dev/guide/markdown) 的文件。
