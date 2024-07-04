

<script setup>
import { watchEffect } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

watchEffect(() => {
  const isBorderless = page.value.frontmatter.borderless === true

  if (typeof window !== 'undefined') {
    if (isBorderless) {
      document.body.classList.add('borderless')
    } else {
      document.body.classList.remove('borderless')
    }
  }
})
</script>
