import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
// 引入axios
import axios from "@/utils/request.js";
import cache from "@/plugins/cache";
import modal from "@/plugins/modal";
import "./utils/rem.js";
// pinia导入
import pinia from "@/stores/pinia";
app.use(pinia);
// element-plus样式导入
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
app.use(ElementPlus, { locale: zhCn });
// element图标导入
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 路由
import router from "./router"; // 挂载路由模块
app.use(router);
import "@/assets/styles/style.scss";
app.mount("#app");
app.config.globalProperties.$axios = axios; //配置axios的全局引用
// 缓存对象
app.config.globalProperties.$cache = cache;
// 模态框对象
app.config.globalProperties.$modal = modal;
