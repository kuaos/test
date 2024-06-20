import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import px2rem from "postcss-px2rem";
// 引入等比适配插件
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 100,
});
export default defineConfig({
  plugins: [vue()],
  // 配置路由 @/：src文件
  resolve: {
    alias: {
      // 设置路径
      "~": path.resolve(__dirname, "./"),
      // 设置别名
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  // vite 相关配置
  server: {
    port: 80,
    host: true,
    open: true,
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      "/dev-api": {
        target: "https://lechenglvyou.com/test-lecheng",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, ""),
      },
    },
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
  base: "./",
});
