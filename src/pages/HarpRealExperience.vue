<template>
  <PageWrapper>
    <header>
      <h1>《Harp Real》音高調整經驗分享</h1>
      <p>作者：周彥廷｜發布於 2025 年 12 月 5 日</p>
    </header>

    <nav>
      <strong>📖 內容導覽：</strong>
      <ul>
        <li><span class="nav-link" @click="scrollTo('introduction')">前言與基本說明</span></li>
        <li><span class="nav-link" @click="scrollTo('problems')">音高調整問題說明</span></li>
        <li><span class="nav-link" @click="scrollTo('examples')">實際演奏案例</span></li>
        <li><span class="nav-link" @click="scrollTo('videos')">影片示範</span></li>
        <li><span class="nav-link" @click="scrollTo('conclusion')">小結與心得</span></li>
        <li><span class="nav-link" @click="scrollTo('additional-thoughts')">其他心得與補充</span></li>
        <li><router-link to="/process_of_developing_app.html">Harp Real開發技術介紹</router-link></li>
      </ul>
    </nav>

    <section id="introduction">
      <h2>前言與基本說明</h2>
      <p>大家好！今天想與大家分享我在使用 <strong>《Harp Real》</strong> 這款豎琴模擬器時，所遇到的一些音高調整問題，以及這些問題如何影響我錄製演奏的過程。</p>
      <p>《Harp Real》模擬了真實豎琴的設計，並要求使用者手動調整每根弦的音高。這種手動調音的方式，雖然增加了真實感，但在需要快速切換調性或頻繁調整音高時，會對錄音流暢性和效率產生一定影響。</p>
    </section>

    <section id="problems">
      <h2>音高調整問題說明</h2>
      <p>與《Perfect Piano》或<a href="https://chrischou19990904.github.io/Marimba_App_Introduction" target="_blank">《Marimba Real》</a>這類模擬器不同，這些模擬器可以隨時切換黑白鍵，《Harp Real》則無法即時切換升降音。如果在演奏過程中需要變調，演奏者只能中斷演奏，手動調整每根弦的音高，這會導致錄音時出現明顯的停頓和斷層。</p>
      <p>雖然我們可以使用剪輯軟體（如 InShot 或 CapCut）來修剪畫面，將中斷部分剪掉，但音高的斷層仍然容易被聽出來，影響音樂的連貫性。</p>
    </section>

    <section id="examples">
      <h2>實際演奏案例</h2>

      <h3 id="armor_hero_emperor">🎵《帝皇再臨》</h3>
      <p>這首曲子主要是 C 大調，但伴奏中出現了升 A（降 B）的音符。錄製過程中，我必須中途暫停並調整弦音，這樣的中斷在影片中可以看到（此影片經過剪輯處理）。</p>
      <video controls><source src="/帝皇再臨.mp4" type="video/mp4"></video>

      <h3 id="armor_hero_lava">🎵《Just KO》</h3>
      <p>這首曲子也是 C 大調，但有一部分需要升 G（降 A）。如果事先沒有設定好調性，演奏者只能手動調整，無法即時處理，這會造成演奏的中斷（影片經過剪輯處理）。</p>
      <video controls><source src="/Just_KO.mp4" type="video/mp4"></video>

      <h3 id="military_music">🎵《中華民國軍樂－下課號》</h3>
      <p>這首歌涵蓋了 C、D、E、F 和 G 五個大調，每個調性都需要調整弦音，導致錄製過程中出現數次停頓（此影片未經剪輯）。</p>
      <video controls><source src="/中華民國軍樂-下課號.mp4" type="video/mp4"></video>
    </section>

    <section id="videos">
      <h2>🎥 其他《Harp Real》演奏作品</h2>
      <ol>
        <li>Miracle of Ultra<br><video controls><source src="/miracle_of_ultra.mp4"></video></li>
        <li>光的戰役<br><video controls><source src="/光的戰役.mp4"></video></li>
        <li>穿越時空的思念<br><video controls><source src="/穿越時空的思念.mp4"></video></li>
        <li>哀歌<br><video controls><source src="/elegy.mp4"></video></li>
        <li id="vampire_vs_vampire">一眉道人<br><video controls><source src="/一眉道人.mp4"></video></li>
        <li>殭屍復活 II<br><video controls><source src="/殭屍復活II.mp4"></video></li>
        <li>Samsung Galaxy Alarm - Homecoming<br><video controls><source src="/homecoming.mp4"></video></li>
        <li>益可膚<br><video controls><source src="/益可膚.mp4"></video></li>
        <li>綠油精<br><video controls><source src="/綠油精.mp4"></video></li>
        <li>Way Back Home<br><video controls><source src="/way_back_home.mp4"></video></li>
      </ol>
    </section>
    <section id="conclusion">
      <h2>🧠 小結與心得</h2>
      <p>總結來說，《Harp Real》的音色真實，模擬設計也非常有趣，但其缺乏即時變調和踏板功能，對於那些需要在同一首曲子中轉調的使用者來說，無疑是一個實際的限制。</p>
      <p>作為一個有鋼琴基礎的使用者，我深刻體會到豎琴與鋼琴在音高操作上的本質差異。在未來選擇演奏曲目和工具時，我會考慮這些限制，並選擇最適合當時需求的樂器或模擬器。</p>
    </section>

    <section id="additional-thoughts">
      <h2>🎶 其他心得與補充</h2>
      <p>其實，使用豎琴模擬器比鋼琴模擬器更具挑戰性，主要是因為豎琴的弦非常細小且較為緊密，音階辨識相對困難。在演奏過程中，尤其是對於鋼琴有一定基礎的我來說，常常會因為音階的辨識不清而彈錯音，這需要特別小心翼翼，也讓整體演奏的集中力和精神消耗變大。</p>
      <p>雖然豎琴的音階排列與鋼琴相似，但由於手指操作的精確度要求更高，且要避免錯誤按壓到不該彈的弦，這一點讓我在彈奏過程中更加小心。每當調音時，還要反覆確認每根弦的音高是否準確，這樣的操作過程比鋼琴更加繁瑣。</p>
      <p>此外，標題為「其他演奏作品」中的旋律並不需要進行音高調整，整個過程中完全使用鋼琴的白鍵進行演奏，因此可以避免豎琴模擬器中所面臨的音高調整問題，整體上也會更加流暢。</p>
    </section>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '../components/PageWrapper.vue';
import { nextTick } from 'vue';

// 錨點導航的核心方法
const scrollTo = (id) => {
  // nextTick 確保 DOM 元素已渲染
  nextTick(() => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // 平滑滾動
        block: 'start'       // 讓區塊頂部對齊視窗
      });
    }
  });
};
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
/* 為新的錨點連結加上手形游標，使其看起來像可點擊 */
.nav-link {
  cursor: pointer;
  color: #3498db; /* 藍色，像連結 */
  text-decoration: underline;
  display: inline-block;
}
.nav-link:hover {
  color: #2980b9;
}
</style>