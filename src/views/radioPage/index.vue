<template>
  <div id="container">
    <cardMain :title="`联系信息`">
      <el-radio-group v-model="radio" class="ml-4">
        <el-radio value="1" size="large">Option 1</el-radio>
        <el-radio value="2" size="large">Option 2</el-radio>
      </el-radio-group>
    </cardMain>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import cardMain from "@/components/card";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
const radio = ref("1");
</script>
<style lang="scss" scoped>
#container {
  padding: 0;
}
</style>
