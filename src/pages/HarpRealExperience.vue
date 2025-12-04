<template>
  <PageWrapper>
    <header>
      <h1>《Harp Real》音高調整經驗分享</h1>
      <p>作者：周彥廷｜發布於 2025 年 12 月 5 日</p>
    </header>

    <nav>
      <strong>📖 內容導覽：</strong>
      <ul>
        <li><a href="#introduction">前言與基本說明</a></li>
        <li><a href="#problems">音高調整問題說明</a></li>
        <li><a href="#examples">實際演奏案例</a></li>
        <li><a href="#videos">影片示範</a></li>
        <li><a href="#conclusion">小結與心得</a></li>
        <li><router-link to="/process_of_developing_app.html">Harp Real開發技術介紹</router-link></li>
      </ul>
    </nav>

    <section id="introduction">
      <h2>前言與基本說明</h2>
      <p>大家好！今天想跟大家聊聊我在使用 <strong>《Harp Real》</strong> 這款豎琴模擬器時，遇到關於 <strong>音高調整</strong> 的一些問題，以及它怎麼影響到我錄製演奏的流程。</p>
      <p>《Harp Real》模擬了真實豎琴以調音栓手動調音的設計，因此每根弦的音高都必須一一手動調整。這在需要快速切換調性或頻繁修改音高的情況下，可能會影響錄音的流暢性與效率。</p>
    </section>

    <section id="problems">
      <h2>音高調整問題說明</h2>
      <p>不像《Perfect Piano》和<a href="https://chrischou19990904.github.io/Marimba_App_Introduction" target="_blank">《Marimba Real》</a>那樣可以自由切換黑白鍵，《Harp Real》無法即時切換升降音。若中途遇到需要變調，演奏者只能中斷演奏、手動調整弦音，這會造成錄製時的明顯停頓與斷層。</p>
      <p>雖然可以透過剪輯軟體如 InShot 或 CapCut 剪接中斷畫面，但聲音的斷層仍容易被察覺。</p>
    </section>

    <section id="examples">
      <h2>實際演奏案例</h2>

      <h3 id="armor_hero_emperor">🎵《帝皇再臨》</h3>
      <p>此曲主要為 C 大調，但伴奏中出現 <em>升 A</em>（降 B），我在錄製時必須中途暫停調音，造成演奏中斷（本影片有剪接過）。</p>
      <video controls><source src="/帝皇再臨.mp4" type="video/mp4"></video>

      <h3 id="armor_hero_lava">🎵《Just KO》</h3>
      <p>此曲主要為 C 大調，但某個部分有<em>升 G</em>（降 A） 的需求。若事前沒設定正確的調性，只能手動調整，無法即時處理（本影片有剪接過）。</p>
      <video controls><source src="/Just_KO.mp4" type="video/mp4"></video>

      <h3 id="military_music">🎵《中華民國軍樂－下課號》</h3>
      <p>這首歌用了 C、D、E、F、G 五種大調，每種調性都需要調整弦音，導致影片中出現數次中斷（本影片未經剪接）。</p>
      <video controls><source src="/中華民國軍樂-下課號.mp4" type="video/mp4"></video>
    </section>

    <section id="videos">
      <h2>🎥 其他 Harp Real 演奏作品</h2>
      <ol>
        <li>穿越時空的思念<br><video controls><source src="/穿越時空的思念.mp4"></video></li>
        <li id="vampire_vs_vampire">一眉道人<br><video controls><source src="/一眉道人.mp4"></video></li>
        <li>殭屍復活II<br><video controls><source src="/殭屍復活II.mp4"></video></li>
        <li>Samsung Galaxy Alarm - Homecoming<br><video controls><source src="/homecoming.mp4"></video></li>
        <li>益可膚<br><video controls><source src="/益可膚.mp4"></video></li>
        <li>綠油精<br><video controls><source src="/綠油精.mp4"></video></li>
        <li>Way Back Home<br><video controls><source src="/way_back_home.mp4"></video></li>
      </ol>
    </section>

    <section id="conclusion">
      <h2>🧠 小結與心得</h2>
      <p>《Harp Real》的音色真實、模擬設計有趣，但缺乏即時變調與踏板功能，對於需要在同一曲中轉調的使用者來說，有實際限制。</p>
      <p>作為有鋼琴基礎的使用者，我深感兩者在音高操作上的本質差異，也會在日後選擇演奏曲目與工具時，考慮這些限制。</p>
    </section>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '../components/PageWrapper.vue';
// 影片檔案（如帝皇再臨.mp4）需在 Vue 專案的 public 或 assets 資料夾中
</script>

<style scoped>
/* 頁面特定樣式，如 nav */
nav {
  background-color: #f0f0f0;
  padding: 10px 20px;
  margin-bottom: 30px;
  border-radius: 6px;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav ul li {
  margin: 6px 0;
}
</style>