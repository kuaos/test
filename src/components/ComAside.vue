<template>
  <div id="comAside">
    <el-menu
      :default-active="router.currentRoute._value.fullPath || '/home'"
      class="el-menu-vertical-demo"
      @select="select"
      @open="handleOpen"
      @close="handleClose"
      :background-color="color"
      :text-color="textColor"
      :active-text-color="textColor"
      :collapse="store.isCollapse"
      :router="true"
      :collapse-transition="false"
    >
      <a
        class="topIcon1"
        href="home"
        :style="{ backgroundColor: color }"
        v-if="store.isCollapse == false"
      >
        <img src="@/assets/elephant.svg" class="imgSize" />

        <div class="title" :style="{ color: textColor }">{{ title }}</div>
      </a>
      <a
        class="topIcon2"
        href="home"
        :style="{ backgroundColor: color }"
        v-if="store.isCollapse == true"
      >
        <img src="@/assets/elephant.svg" class="imgSize" />
      </a>
      <div style="height: 0.6rem"></div>
      <div v-for="(item, index) in menuData">
        <!-- 没有二级菜单的 -->
        <template v-if="!item.children">
          <el-menu-item :index="item.path" @click="selectMenu(item, 0)">
            <el-icon class="iconSize">
              <component class="fold-menu" :is="item.icon"></component>
            </el-icon>
            <template #title>
              <span class="labelFontSize">{{ item.label }}</span>
            </template>
          </el-menu-item>
        </template>
        <template v-else>
          <!-- 有二级菜单的 -->
          <el-sub-menu :index="item.path">
            <!-- 二级菜单固定文字 -->
            <template #title>
              <el-icon class="iconSize">
                <component class="fold-menu" :is="item.icon"></component>
              </el-icon>
              <span class="labelFontSize" v-if="store.isCollapse == false">{{
                item.label
              }}</span>
            </template>
            <!-- 二级菜单里的children -->
            <el-menu-item-group>
              <el-menu-item
                v-for="(subItem, subIndex) in item.children"
                :key="subItem.index"
                :index="subItem.path"
                @click="selectMenu(item, 1)"
              >
                <el-icon class="iconSize">
                  <component class="fold-menu" :is="subItem.icon"></component>
                </el-icon>
                <template #title>
                  <span class="labelFontSize">{{ subItem.label }}</span>
                </template>
              </el-menu-item></el-menu-item-group
            >
          </el-sub-menu></template
        >
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, getCurrentInstance } from "vue";
import { useInfoStore } from "@/stores";
import { useRouter } from "vue-router";
import menuData from "./js/menu.js";
const router = useRouter();
const store = useInfoStore();
const title = ref("KUAOS");
const display = ref("block");
const color = ref("#002766");
const textColor = ref("#FFF");
color.value = store.color;
textColor.value = store.textColor;
watch(
  () => store.isCollapse,
  (newValue, oldValue) => {
    if (store.isCollapse == false) {
      display.value = "block";
    } else {
      display.value = "none";
    }
  },
  { immediate: true, deep: true }
);
watch(
  () => store.color,
  (newValue, oldValue) => {
    color.value = store.color;
  },
  { immediate: true, deep: true }
);
watch(
  () => store.textColor,
  (newValue, oldValue) => {
    textColor.value = store.textColor;
  },
  { immediate: true, deep: true }
);
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
const select = (key, keyPath) => {
  console.log(key, keyPath);
};
const selectMenu = (item, state) => {
  console.log(item, state);
  if (state == 0) {
    store.label = item.label;
    store.subLabel = "";
  } else if (state == 1) {
    store.label = item.label;
    store.subLabel = item.children[0].label;
  }
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
//@import '引入的css文件';
#comAside {
  width: 100%;
  height: 100%;
  .labelFontSize {
    font-size: 0.14rem;
  }
  .iconSize {
    width: 0.18rem;
    height: 0.18rem;
  }
  .imgSize {
    width: 0.4rem;
    height: 0.4rem;
  }
  .topIcon1 {
    width: 2.4rem;
    position: fixed;
    top: 0;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    .title {
      margin-left: 0.16rem;
      color: #ffffff;
      font-family: Alimama ShuHeiTi;
      font-size: 0.2rem;
      font-weight: 700;
      letter-spacing: 1.92px;
    }
  }
  .topIcon2 {
    width: 64px;
    position: fixed;
    top: 0;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :deep(.el-menu) {
    border-right: solid 0px;
  }
  .el-menu-item-group__title {
    padding: 0px;
  }
  :deep(.el-menu-item.is-active) {
    border-left: 4px solid var(--textColor);
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.32) 0%,
      rgba(255, 255, 255, 0) 94.17%
    );
    --textColor: v-bind(textColor);
    color: var(--textColor);
  }
  :deep(.el-sub-menu .el-sub-menu__icon-arrow) {
    --display: v-bind(display);
    display: var(--display);
  }
}
</style>
