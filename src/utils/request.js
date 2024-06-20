import axios from "axios";
import {
  ElNotification,
  ElMessageBox,
  ElMessage,
  ElLoading,
} from "element-plus";
import { tansParams } from "@/utils/universal";
import errorCode from "@/utils/errorCode";
import { useInfoStore } from "@/stores/index";
import pinia from "@/stores/pinia";
import router from "@/router";
import { getToken, setToken, removeToken } from "@/utils/auth";
const store = useInfoStore(pinia);
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
//声明一个基础接口变量
let baseURL;
//配置开发环境
if (process.env.NODE_ENV === "development") {
  baseURL = "/dev-api";
}
// 配置生产环境
if (process.env.NODE_ENV === "production") {
  baseURL = "/test-lecheng";
}
// axios 创建
const service = axios.create({
  baseURL: baseURL,
  timeout: 200000000,
});
//请求拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
    // console.log(store, "store");
    // console.log(store.token, "token");
    // console.log(getToken(), "token");
    if (getToken()) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?" + tansParams(config.params);
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    if (
      !isRepeatSubmit &&
      (config.method === "post" || config.method === "put")
    ) {
      const requestObj = {
        url: config.url,
        data:
          typeof config.data === "object"
            ? JSON.stringify(config.data)
            : config.data,
        time: new Date().getTime(),
      };
      const requestSize = Object.keys(JSON.stringify(requestObj)).length; // 请求数据大小
      const limitSize = 5 * 1024 * 1024; // 限制存放数据5M
      if (requestSize >= limitSize) {
        console.warn(
          `[${config.url}]: ` +
            "请求数据大小超出允许的5M限制，无法进行防重复提交验证。"
        );
        return config;
      }
    }
    //在发送之前做点什么
    return config;
  },
  (error) => {
    //对请求错误做点什么
    console.log(error, error);
    console.log(error, error);
    Promise.reject(error);
  }
);
//响应拦截器
service.interceptors.response.use(
  (res) => {
    console.log(res);
    // console.log(typeof res.data.code);
    // console.log(res.request.responseType);
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    // 二进制数据则直接返回
    if (
      res.request.responseType === "blob" ||
      res.request.responseType === "arraybuffer"
    ) {
      return res.data;
    }
    if (code == 4001) {
      ElMessageBox.confirm(
        "登录状态已过期，您可以继续留在该页面，或者重新登录",
        "系统提示",
        {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          router.push("/login");
          removeToken();
        })
        .catch(() => {});
    }
    if (code == 401) {
      ElMessage({ message: msg, type: "error" });
      return Promise.reject(new Error(msg));
    } else if (code == 500) {
      ElMessage({ message: msg, type: "error" });
      return Promise.reject(new Error(msg));
    } else if (code == 601) {
      ElMessage({ message: msg, type: "warning" });
      return Promise.reject(new Error(msg));
    } else if (code != 200) {
      ElNotification.error({ title: msg });
      return Promise.reject("error");
    } else {
      // console.log("成功了");
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    console.log("err", error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({ message: message, type: "error", duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

export default service;
