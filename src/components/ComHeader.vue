<template>
  <div id="ComHeader">
    <!-- 左侧 -->
    <div class="l-header">
      <el-icon class="icon" :size="25" @click="changeIsCollapse">
        <component :is="collapse"></component>
      </el-icon>
    </div>
    <!-- 右侧 -->
    <div class="r-header">
      <el-icon class="icon" :size="20" @click="changeIsMenu">
        <component is="Switch"></component>
      </el-icon>
      <el-icon class="icon" :size="20" @click="changeTabBar">
        <component :is="tabBar"></component>
      </el-icon>
      <el-icon class="icon" :size="20" @click="FullScreen">
        <component is="FullScreen"></component>
      </el-icon>
      <!-- <img src="@/assets/image/touxiang.jpg" /> -->
      <el-dropdown>
        <div style="display: flex; align-items: center">
          <!-- 用户头像 -->
          <div class="name">{{ userInfo["name"] }}</div>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changeIsCollapse">
              菜单折叠
            </el-dropdown-item>
            <el-dropdown-item @click="switchMenu">切换菜单</el-dropdown-item>
            <el-dropdown-item @click="changeTabBar">
              标签{{ store.tabBarState == 0 ? "(开)" : "(关)" }}
            </el-dropdown-item>
            <el-dropdown-item @click="FullScreen">
              {{ fullscreenText }}
            </el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useInfoStore } from "@/stores";
import { ElMessage } from "element-plus";
import { getToken, setToken, removeToken } from "@/utils/auth";
const router = useRouter();
const store = useInfoStore();
const userInfo = ref({});
const collapse = ref("Fold");
const tabBar = ref("Open");
// userInfo.value = JSON.parse(localStorage.getItem("userInfo"));
userInfo.value.name = "管理员";
console.log(userInfo.value);
const loginOut = () => {
  router.push({
    name: "login",
  });
  removeToken();
};
const switchMenu = () => {
  store.menuState == 0 ? (store.menuState = 1) : (store.menuState = 0);
};
const changeIsCollapse = () => {
  store.isCollapse == true
    ? (store.isCollapse = false)
    : (store.isCollapse = true);
  store.isCollapse == true
    ? (collapse.value = "Expand")
    : (collapse.value = "Fold");
};
const changeIsMenu = () => {
  store.menuState == 0 ? (store.optionalState = 1) : (store.optionalState = 0);
  store.menuState == 0 ? (store.menuState = 1) : (store.menuState = 0);
  store.menuState == 0 ? router.push("/home") : router.push("/study/foreword");
};
const changeTabBar = () => {
  store.tabBarState == 0 ? (store.tabBarState = 1) : (store.tabBarState = 0);
  store.tabBarState == 0 ? (tabBar.value = "Open") : (tabBar.value = "TurnOff");
  store.tabBarState == 0
    ? (store.headerHeight = "1rem")
    : (store.headerHeight = "0.6rem");
};
const fullscreen = ref(false);
const fullscreenText = ref("全屏");
const FullScreen = () => {
  let element = document.documentElement;
  if (fullscreen.value) {
    //退出全屏操作
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    fullscreenText.value = "全屏";
  } else {
    //全屏操作
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
    fullscreenText.value = "取消全屏";
  }
  //全屏状态取反
  fullscreen.value = !fullscreen.value;
};
</script>

<style lang="scss" scoped>
//@import '引入的css文件';
#ComHeader {
  width: 100%;
  height: 0.6rem;
  padding: 0 0.15rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  .l-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      cursor: pointer;
    }
    .icon:hover {
      color: #ccc;
    }
  }
  .r-header {
    display: flex;
    align-items: center;
    margin-right: 0.3rem;
    :deep(el-dropdown) {
      color: #fff;
    }
    .icon {
      width: 40px;
      height: 30px;
      cursor: pointer;
    }
    img {
      width: 0.36rem;
      height: 0.36rem;
      border-radius: 50%;
      margin-right: 0.08rem;
    }
    .name {
      margin-right: 0.08rem;
      color: #000;
      font-family: PingFang SC;
      font-size: 0.16rem;
    }
  }
}
</style>
