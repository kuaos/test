<template>
  <div class="tab">
    <div :class="store.subLabel == '' ? 'title' : ''">{{ store.label }}</div>
    <div class="subTitle">
      <span v-if="store.subLabel !== ''"> / </span>{{ store.subLabel }}
    </div>
  </div>
</template>
<script setup>
import { useInfoStore } from "@/stores";
const store = useInfoStore();
</script>
<style lang="scss" scoped>
.tab {
  color: rgba(0, 0, 0, 0.45);
  height: 0.4rem;
  width: 100%;
  text-align: left;
  background: #fff;
  padding-left: 0.16rem;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  box-shadow: 0px -20px 20px -30px inset rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  .title {
    color: rgba(0, 0, 0, 0.85);
  }
  .subTitle {
    color: rgba(0, 0, 0, 0.85);
    margin-left: 0.05rem;
  }
}
</style>
