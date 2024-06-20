<template>
  <div id="ComAsideOther">
    <div class="title">{{ title }}</div>
    <p class="user">
      作者：
      <span style="color: #646cff" @click="ahref('/foreword')"> Kuaos</span>
    </p>
    <h4 class="catalogue">目录</h4>
    <ol class="catalogueOl">
      <li class="catalogueLi" v-for="(item, index) in catalogueList">
        <span style="color: #646cff" @click="ahref(item.href)">
          {{ item.name }}</span
        >
      </li>
    </ol>
  </div>
</template>
<script setup>
import { ref, reactive, computed, watch, getCurrentInstance } from "vue";
import { useInfoStore } from "@/stores";
import { useRouter } from "vue-router";
import catalogueList from "./js/catalogue.js";
const router = useRouter();
const store = useInfoStore();
const title = ref("KUAOS");
const display = ref("block");
const color = ref("#002766");
const textColor = ref("#FFF");
color.value = store.color;
textColor.value = store.textColor;
const ahref = (href) => {
  // console.log(router);
  if (href.includes("/study")) {
    store.optionalState = 1;
  } else {
    store.optionalState = 0;
  }
  router.push(href);
};
</script>
<style lang="scss" scoped>
#ComAsideOther {
  width: 100%;
  padding-top: 0.24rem;
  .title {
    width: 100%;
    font-size: 0.24rem;
    text-align: center;
    font-weight: bold;
  }
  .user {
    width: 100%;
    font-size: 0.16rem;
    cursor: pointer;
  }
  .catalogue {
    // width: 100%;
    font-size: 0.14rem;
    text-align: left;
    padding-left: 0.24rem;
  }
  .catalogueOl {
    width: calc(100% - 0.72rem);
    .catalogueLi {
      text-align: left;
      cursor: pointer;
    }
  }
}
</style>
