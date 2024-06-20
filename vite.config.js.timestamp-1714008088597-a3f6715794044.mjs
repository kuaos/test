// vite.config.js
import { defineConfig } from "file:///D:/CODE/self/kuaos-admin/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/CODE/self/kuaos-admin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import px2rem from "file:///D:/CODE/self/kuaos-admin/node_modules/postcss-px2rem/index.js";
var __vite_injected_original_dirname = "D:\\CODE\\self\\kuaos-admin";
var postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 100
});
var vite_config_default = defineConfig({
  plugins: [vue()],
  // 配置路由 @/：src文件
  resolve: {
    alias: {
      // 设置路径
      "~": path.resolve(__vite_injected_original_dirname, "./"),
      // 设置别名
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
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
        rewrite: (p) => p.replace(/^\/dev-api/, "")
      }
    }
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDT0RFXFxcXHNlbGZcXFxca3Vhb3MtYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENPREVcXFxcc2VsZlxcXFxrdWFvcy1hZG1pblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ09ERS9zZWxmL2t1YW9zLWFkbWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBweDJyZW0gZnJvbSBcInBvc3Rjc3MtcHgycmVtXCI7XHJcbi8vIFx1NUYxNVx1NTE2NVx1N0I0OVx1NkJENFx1OTAwMlx1OTE0RFx1NjNEMlx1NEVGNlxyXG4vLyBcdTkxNERcdTdGNkVcdTU3RkFcdTY3MkNcdTU5MjdcdTVDMEZcclxuY29uc3QgcG9zdGNzcyA9IHB4MnJlbSh7XHJcbiAgLy8gXHU1N0ZBXHU1MUM2XHU1OTI3XHU1QzBGIGJhc2VTaXplXHVGRjBDXHU5NzAwXHU4OTgxXHU1NDhDcmVtLmpzXHU0RTJEXHU3NkY4XHU1NDBDXHJcbiAgcmVtVW5pdDogMTAwLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbdnVlKCldLFxyXG4gIC8vIFx1OTE0RFx1N0Y2RVx1OERFRlx1NzUzMSBAL1x1RkYxQXNyY1x1NjU4N1x1NEVGNlxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1OERFRlx1NUY4NFxyXG4gICAgICBcIn5cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL1wiKSxcclxuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU1MjJCXHU1NDBEXHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5tanNcIiwgXCIuanNcIiwgXCIudHNcIiwgXCIuanN4XCIsIFwiLnRzeFwiLCBcIi5qc29uXCIsIFwiLnZ1ZVwiXSxcclxuICB9LFxyXG4gIC8vIHZpdGUgXHU3NkY4XHU1MTczXHU5MTREXHU3RjZFXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA4MCxcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgLy8gaHR0cHM6Ly9jbi52aXRlanMuZGV2L2NvbmZpZy8jc2VydmVyLXByb3h5XHJcbiAgICAgIFwiL2Rldi1hcGlcIjoge1xyXG4gICAgICAgIHRhcmdldDogXCJodHRwczovL2xlY2hlbmdsdnlvdS5jb20vdGVzdC1sZWNoZW5nXCIsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwKSA9PiBwLnJlcGxhY2UoL15cXC9kZXYtYXBpLywgXCJcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGludE9uU2F2ZTogdHJ1ZSxcclxuICBjc3M6IHtcclxuICAgIGxvYWRlck9wdGlvbnM6IHtcclxuICAgICAgcG9zdGNzczoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtwb3N0Y3NzXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1EsU0FBUyxvQkFBb0I7QUFDL1IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFIbkIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxVQUFVLE9BQU87QUFBQTtBQUFBLEVBRXJCLFNBQVM7QUFDWCxDQUFDO0FBQ0QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBO0FBQUEsRUFFZixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssS0FBSyxRQUFRLGtDQUFXLElBQUk7QUFBQTtBQUFBLE1BRWpDLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLElBQ0EsWUFBWSxDQUFDLFFBQVEsT0FBTyxPQUFPLFFBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxFQUNwRTtBQUFBO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxNQUVMLFlBQVk7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxjQUFjLEVBQUU7QUFBQSxNQUM1QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsRUFDWixLQUFLO0FBQUEsSUFDSCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxTQUFTLENBQUMsT0FBTztBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
