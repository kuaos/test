<template>
  <div id="container">
    <cardMain :title="`前言`"> 1111</cardMain>
  </div>
</template>
<script setup>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import cardMain from "@/components/card";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
</script>
<style lang="scss" scoped></style>
