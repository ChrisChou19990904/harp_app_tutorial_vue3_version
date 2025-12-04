<template>
  <div id="social-share" style="margin-top: 20px;">
    <a id="fb-share" :href="fbShareUrl" target="_blank" style="color: #4267B2; font-weight: bold;">分享到 Facebook</a>
    <span> | </span>
    <a id="line-share" :href="lineShareUrl" target="_blank" style="color: #00C300; font-weight: bold;">分享到 Line</a>
    <span> | </span>
    <a id="twitter-share" :href="twitterShareUrl" target="_blank" style="color: #1DA1F2; font-weight: bold;">分享到 X</a>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 在 Vue Router 環境中，動態獲取當前頁面的完整 URL (包括 hash)
// 注意：實際部署時，您可能需要使用 window.location.origin + route.fullPath
const currentUrl = computed(() => {
  // 這裡假設您的 Vue 應用將部署在一個固定的 URL 上
  // 在開發環境中，使用 window.location.href 是一個快速的方法
  return window.location.origin + window.location.pathname + route.fullPath;
});

const fbShareUrl = computed(() =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
);

const lineShareUrl = computed(() =>
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl.value)}`
);

const twitterShareUrl = computed(() =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=我的文章標題`
);
</script>

<style scoped>
#social-share a {
  text-decoration: none;
  font-weight: bold;
}
#social-share a:hover {
  text-decoration: underline;
}
#social-share span {
  margin: 0 5px;
}
</style>