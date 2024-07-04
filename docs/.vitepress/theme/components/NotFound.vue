<!-- .vitepress/theme/NotFound.vue -->
<template>
	<div class="not-found-container">
		<div class="not-found-content">
			<h1>404</h1>
      <div class="img-container">
        <img src="https://i.imgur.com/yBZyrSc.png">
      </div>
			<p>抱歉，葉小妹找不到你要的頁面。</p>
			<p>醒醒吧肥仔～找不到就自己動手做啊～</p>
			<a href="/" class="home-button">返回首頁</a>
			<a href="/LoM-wiki/develop/1-start" class="home-button">協作Wiki</a>
		</div>
	</div>
</template>

<style scoped>
.not-found-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: var(--vp-c-bg);
	color: var(--vp-c-text);
	text-align: center;
}

.not-found-content {
	max-width: 600px;
	padding: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	background-color: var(--vp-c-card-bg);
}

.not-found-content h1 {
	font-size: 4rem;
	margin-bottom: 1.5rem;
}

.not-found-content p {
	font-size: 1.25rem;
	margin-bottom: 2rem;
}

.home-button {
	display: inline-block;
	padding: 10px 20px;
  margin: 10px;
	font-size: 1rem;
	color: #ffffff;
	background-color: #007bff;
	border-radius: 4px;
	text-decoration: none;
	transition: background-color 0.3s;
}

.home-button:hover {
	background-color: #0056b3;
}

.img-container {
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  padding: 20px 0px;
}
</style>
