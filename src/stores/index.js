import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from "@/utils/auth";
export const useInfoStore = defineStore("users", {
  state: () => ({
    userInfo: {
      id: null,
      name: "管理员",
      openId: null,
      password: null,
      phone: null,
      sysRole: null,
      token: null,
    },
    isCollapse: false,
    token: getToken(),
    state: "add",
    spotId: null,
    lineId: null,
    // color: "#002766",
    color: "#1e282c",
    textColor: "#FFF",
    label: "首页",
    subLabel: "",
    menuState: 0,
    tabBarState: 0,
    headerHeight: "1rem",
    optionalState: 0,
  }),
  // 相当于计算属性
  getters: {
    getAddAge: (state) => {
      return state.userInfo.age + 100;
    },
    getNameAndAge() {
      return this.userInfo.name + this.getAddAge; // 调用其它getter
    },
  },
  // 相当于methods
  actions: {
    setName(e) {
      this.userInfo.name = e;
    },
    setAge(e) {
      this.userInfo.age = e;
    },
    setSex(e) {
      this.userInfo.sex = e;
    },
  },
});
