<template>
  <PageWrapper>
    <h1>🎼 Harp Real - 技術原理與架構推測（非官方）</h1>

    <p>本頁整理我對《Harp Real》App 的使用觀察與技術推測，目的是探索它可能的實作方式，為未來開發類似擬真豎琴應用提供參考。</p>

    <div class="note">
      📌 <strong>注意：</strong>這不是官方技術文件，而是我根據實際操作體驗與分析做出的合理推測。
    </div>

    <h2>🎶 App 概述與功能</h2>
    <table>
      <tr><th>類別</th><th>說明</th></tr>
      <tr><td>樂器類型</td><td>豎琴（Harp）模擬演奏 App</td></tr>
      <tr><td>操作方式</td><td>單指或多指滑動琴弦區塊，模擬撥弦演奏</td></tr>
      <tr><td>核心功能</td><td>滑奏（glissando）、單弦演奏、左右手分區（部分型號）</td></tr>
    </table>

    <h2>🎬 我的演奏作品與紀錄</h2>
    <p>📁 點這裡查看我在 Harp Real 上的 10 段演奏與螢幕錄影：<br>
      👉 <router-link to="/essence_of_recordings.html">/harp-real-recordings</router-link></p>

    <h2>📌 後續計畫</h2>
    <ul>
      <li>模擬一個 HTML + JS 版豎琴（支援滑動觸發）</li>
      <li>探索滑奏效果的實作方式（透過滑動事件 + 範圍計算）</li>
      <li>整合 AudioKit 建立 iOS 原型</li>
    </ul>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '../components/PageWrapper.vue';
</script>

<style scoped>
/* 頁面特定樣式 */
.note {
  background: #fff8e1;
  border-left: 5px solid #f1c40f;
  padding: 1em;
  margin: 1.5em 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  background: white;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.6em;
}
th {
  background-color: #eaf2f8;
}
</style>