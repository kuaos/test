<template>
  <div id="main">
    <el-container>
      <el-aside
        :width="width"
        :style="{ backgroundColor: store.color }"
        v-if="store.menuState == 0"
      >
        <ComAside></ComAside>
      </el-aside>
      <el-aside :width="otherWidth" style="background-color: #fff" v-else>
        <ComAsideOther></ComAsideOther>
      </el-aside>
      <el-container>
        <el-header
          style="background-color: #fff; padding: 0"
          :style="{ height: store.headerHeight }"
        >
          <ComHeader></ComHeader>
          <tab v-if="store.tabBarState == 0"></tab>
        </el-header>
        <el-main>
          <div style="height: 100%; overflow: auto">
            <router-view />
            <optional
              class="optional"
              v-if="store.optionalState == 1"
            ></optional>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import ComAside from "@/components/ComAside.vue";
import ComAsideOther from "@/components/ComAsideOther.vue";
import ComHeader from "@/components/ComHeader.vue";
import tab from "@/components/tab.vue";
import optional from "@/components/optional.vue";
import { useInfoStore } from "@/stores";
import { ref, reactive, computed, watch } from "vue";
const store = useInfoStore();
const width = computed(() => {
  return store.isCollapse ? "64px" : "2.4rem";
});
const otherWidth = computed(() => {
  return store.isCollapse ? "0px" : "2.8rem";
});
</script>
<style lang="scss" scoped>
//@import '引入的css文件';
#main {
  width: 100%;
  height: 100%;
  .el-header,
  .el-footer {
    background-color: #292929;
    text-align: center;
  }
  .el-aside {
    position: relative;
    background-color: #4e5660;
    text-align: center;
    height: 100vh;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  }
  .el-main {
    background-color: #e9eef3;
    text-align: center;
    padding: 0;
    height: calc(100vh - 1rem);
  }
  .optional {
    position: fixed;
    right: 0.5rem;
    top: 1.5rem;
  }
}
</style>
