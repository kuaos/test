<template>
  <div class="card">
    <div class="title">
      <div class="circle" :style="{ backgroundColor: store.color }"></div>
      <div>{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.card {
  width: calc(100% - 0.32rem);
  margin: 0.16rem 0.16rem 0.16rem 0.16rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #e4e7ed;
  background-color: #fff;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  transition: 0.3s;
  padding: 0 0.24rem 0.2rem 0.24rem;
  box-shadow: 0 0 0.12rem rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  .title {
    height: 0.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
    font-family: PingFang SC;
    font-size: 0.14rem;
    font-weight: 600;
    border-bottom: 0.04rem solid rgba(0, 0, 0, 0.05);
    margin-bottom: 0.2rem;
    .circle {
      height: 0.06rem;
      width: 0.06rem;
      background-color: #41b14e;
      border-radius: 50%;
      margin-right: 0.08rem;
    }
  }
}
</style>
