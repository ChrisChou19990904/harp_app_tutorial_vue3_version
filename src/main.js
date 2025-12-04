import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import HarpRealExperience from './pages/HarpRealExperience.vue';
import HarpRealTech from './pages/HarpRealTech.vue';
import HarpRealRecordings from './pages/HarpRealRecordings.vue';

// 路由設定
const routes = [
    { path: '/', component: HarpRealExperience },
    { path: '/process_of_developing_app.html', component: HarpRealTech },
    { path: '/essence_of_recordings.html', component: HarpRealRecordings },
];

const router = createRouter({
    history: createWebHashHistory(), // 使用 hash 模式模擬靜態檔案連結
    routes,
    // 保持滾動位置在頂部
    scrollBehavior() {
        return { top: 0 };
    }
});

const app = createApp(App);
app.use(router);
app.mount('#app');
