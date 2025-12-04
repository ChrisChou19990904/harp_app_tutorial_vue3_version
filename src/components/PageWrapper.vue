<template>
  <div class="page-container">
    <div id="google_translate_element"></div>
    點擊上方的語言選單以切換語言。
    <main>
      <slot></slot>
    </main>

    <SocialShare />

    <div id="fb-root"></div>
    <div class="fb-comments"
         data-href="https://chrischou19990904.github.io/harp_app_introduction"
         data-width="100%"
         data-numposts="5">
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import TheFooter from './TheFooter.vue';
import SocialShare from './SocialShare.vue';

// 載入 Google Translate API

// 載入 Facebook SDK
const loadFacebookSDK = () => {
  if (typeof window.FB === 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossorigin = 'anonymous';
    script.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v17.0';
    script.setAttribute('nonce', 'yourNonce'); // 請替換為您的實際 nonce
    document.head.appendChild(script);
  } else {
    // 如果已經載入，重新解析留言插件
    window.FB.XFBML.parse();
  }
};

onMounted(() => {
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'zh-TW',
      includedLanguages: 'en,es,fr,de,it,zh-CN,ja,ko,th,vi,my,id,ms,ar,he,ru,tg,uk,hi,tr,pt,nl,is,fi,sv,no,ro,kk,bo,mn,la,fil,tl,el',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    }, 'google_translate_element')
  }

  const script = document.createElement('script')
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.head.appendChild(script)
  loadFacebookSDK();
});
</script>

<style scoped>
/* 此處應包含 .page-container 和 .fb-comments 的相關樣式，或者從全域樣式導入 */
</style>