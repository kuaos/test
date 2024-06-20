<template>
  <div id="container">
    <div class="topInfo">
      <div class="text">
        <div>kuaos</div>
        <div>kuaos</div>
        <div>kuaos</div>
        <div>kuaos</div>
        <div>kuaos >☛☛点我进入☚☚>☛☛点我进入☚☚</div>
        <div>kuaos</div>
      </div>
      <div class="line"></div>
      <div></div>
    </div>
    <div class="cardLine">
      <cardMain :title="`联系信息`"> <div class="sss">kuaos</div> </cardMain>
      <cardMain :title="`更新日志`"> </cardMain>
      <cardMain :title="`模块`"> </cardMain>
    </div>
  </div>
</template>
<script setup>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import cardMain from "@/components/card";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
</script>
<style lang="scss" scoped>
#container {
  padding: 0;
  .topInfo {
    background-color: #fff;
    text-align: left;
    padding: 0.24rem 0.48rem;
    .text {
      div {
        font-size: 0.16rem;
      }
    }
    .line {
      width: 100%;
      background-color: #ccc;
      height: 0.01rem;
      margin: 0.36rem 0;
    }
  }
  .cardLine {
    display: flex;
    .sss {
      font-size: 0.2rem;
    }
  }
}
</style>
