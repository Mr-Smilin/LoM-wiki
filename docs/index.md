---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "活俠傳Wiki"
    text: "Legend of Mortal Wiki"
    tagline: 不負俠義，不忘初心
    image:
        src: /images/index/logo.png
        alt: LoM-wiki
    actions:
        - theme: brand
          text: 瀏覽 Wiki
          link: /wiki-list
        - theme: alt
          text: 官方更新
          link: /other/news
        - theme: alt
          text: 遊戲下載
          link: https://store.steampowered.com/app/1859910/_/
        - theme: alt
          text: Discord
          link: https://discord.gg/P4kePy6qmc
        - theme: alt
          text: 協作Wiki
          link: /develop/1-start
---

<script setup>
import { onMounted } from 'vue';
import { withBase } from "vitepress";

onMounted(() => {
  const heroImage = document.querySelector('.image-container .VPImage');

  const character = document.createElement('img');
  character.id = 'character';
  character.src = withBase('/images/generic/plum_hand.png');
  character.alt = 'Character';
  
  const characterRun = document.createElement('img');
  characterRun.id = 'character-run';
  characterRun.src = withBase('/images/generic/plum_happy_01.png');
  characterRun.alt = 'Character Running';
  characterRun.style.display = 'none';
  
  const characterFade = document.createElement('img');
  characterFade.id = 'character-fade';
  characterFade.src = withBase('/images/index/logo.png');
  characterFade.alt = 'Logo';
  characterFade.style.display = 'none';

  heroImage.parentElement.appendChild(character);
  heroImage.parentElement.appendChild(characterRun);
  heroImage.parentElement.appendChild(characterFade);

  character.addEventListener('animationend', function() {
    this.style.display = 'none';
    characterRun.style.display = 'block';
    characterRun.style.animationPlayState = 'running';
  });

  characterRun.addEventListener('animationend', function() {
    this.style.display = 'none';
    characterFade.style.display = 'block';
    characterFade.style.animationPlayState = 'running';
  });
})
</script>

<style>
@keyframes peek {
  0% { right: 30px; bottom: -600px; opacity: 1; transform: rotate(0deg); }
  20% { right: 30px; bottom: -300px; transform: rotate(0deg); }
  30% { transform: rotate(-20deg); }
  50% { transform: rotate(20deg); }
  70% { transform: rotate(-20deg); }
  80% { right: 30px; bottom: -300px; transform: rotate(0deg); }
  100% { right: 30px; bottom: -800px; opacity: 1; transform: rotate(0deg); }
}

@keyframes run {
  0% { right: -800px; bottom: -350px; }
  100% { right: 600%; bottom: -350px; }
}

@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.image-container{
  clip-path: inset(-100px -100px -50px 20px);
}

.image-container .VPImage{
  display: none;
}

#character {
  position: fixed;
  right: 0px;
  bottom: 0px;
  opacity: 0;
  transform: rotate(0deg);
  transform-origin: bottom right;
  animation: peek 2.5s linear;
}

#character-run {
  position: fixed;
  right: -100px;
  bottom: 10px;
  display: none;
  animation: run 1.5s linear;
}

#character-fade {
  position: fixed;
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  display: none;
  animation: fade 0.5s linear;
}

@media (max-width: 960px){
  .image-container .VPImage{
    display: block;
  }
  #character{
    display: none;
  }
  #character-run{
    display: none;
  }
  #character-fade{
    display: none;
  }
}

</style>
