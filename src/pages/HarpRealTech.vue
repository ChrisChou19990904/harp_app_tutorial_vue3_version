<template>
  <PageWrapper>
    <h2>🎶 App 概述與功能</h2>
    <table>
      <tr><th>類別</th><th>說明</th></tr>
      <tr><td>樂器類型</td><td>豎琴（Harp）模擬演奏 App</td></tr>
      <tr><td>操作方式</td><td>單指或多指滑動琴弦區塊，模擬撥弦演奏</td></tr>
      <tr><td>核心功能</td><td>滑奏（glissando）、單弦演奏、左右手分區（部分型號）</td></tr>
    </table>

    <h2>🔊 音效處理與聲音技術（推測）</h2>
    <table>
      <tr><th>音效處理面向</th><th>推測實作方式</th></tr>
      <tr><td>音源</td><td>預錄 harp 音階樣本，範圍涵蓋 C3～C6 或更寬</td></tr>
      <tr><td>播放方式</td><td>使用 <code>AudioContext</code>（Web）、<code>AVAudioEngine</code>（iOS）或 <code>SoundPool</code>（Android）實現低延遲播放</td></tr>
      <tr><td>滑奏支援</td><td>滑動時快速連續觸發多個相鄰音符播放，並保持音尾</td></tr>
      <tr><td>延音模擬</td><td>多聲音播放疊加並使用自然尾音 sample</td></tr>
    </table>

    <h2>✋ 互動與觸控邏輯（推測）</h2>
    <ul>
      <li>支援手指滑動跨越多弦（滑奏效果）</li>
      <li>每條弦對應一個觸控感應區塊</li>
      <li>每次觸發後保持延音，不會立即中斷（不需要 release 動作）</li>
      <li>部份型號可能支援雙手分區，模擬左手和右手獨立演奏</li>
    </ul>

    <h2>🎛️ 使用者介面觀察</h2>
    <ul>
      <li>垂直排列的琴弦設計，類似真實豎琴弦列</li>
      <li>採透明或簡約風格，避免遮蔽演奏區</li>
      <li>滑動操作非常順暢，未明顯感受到音訊延遲</li>
    </ul>

    <h2>🛠️ 開發技術可能使用</h2>
    <table>
      <tr><th>平台</th><th>可能使用技術</th></tr>
      <tr><td>iOS</td><td>Swift + AVAudioEngine / AudioKit</td></tr>
      <tr><td>Android</td><td>Kotlin / Java + SoundPool / Oboe</td></tr>
      <tr><td>跨平台可能</td><td>Unity（搭配 audio mixer + UI 系統）</td></tr>
    </table>

    <h2>🧠 學習與啟發</h2>
    <ul>
      <li>Harp Real 展現了滑動觸控與聲音播放如何自然結合</li>
      <li>對於音尾處理、聲音平滑銜接有極高實作參考價值</li>
      <li>也讓我更理解「演奏感」與「介面設計」的關鍵關係</li>
    </ul>

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