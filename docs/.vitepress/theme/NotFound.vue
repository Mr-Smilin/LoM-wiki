<!-- .vitepress/theme/NotFound.vue -->
<template>
    <div class="not-found-container">
      <div class="not-found-content">
        <h1>404</h1>
        <p>抱歉，我們無法找到您要找的頁面。</p>
        <a href="/" class="home-button">返回首頁</a>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
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
  </style>
  