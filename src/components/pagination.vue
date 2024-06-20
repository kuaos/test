<template>
  <div class="pagination">
    <el-pagination
      class="pagination"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="slot,->,prev,pager,next,sizes,jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <span style="font-size: 0.14rem"
        >共
        <span style="font-size: 0.16rem">{{ total }}</span>
        条</span
      >
    </el-pagination>
  </div>
</template>
<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
const props = defineProps({
  total: {
    type: Number,
    default: 1000,
  },
  small: {
    type: Boolean,
    default: false,
  },
  background: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const currentPage = ref(1);
const pageSize = ref(10);
const handleSizeChange = (e) => {
  console.log(pageSize.value);
  emit("sizeChange", e);
};
const handleCurrentChange = (e) => {
  console.log(currentPage.value);
  emit("currentChange", e);
};
const emit = defineEmits(["sizeChange", "currentChange"]);
</script>
<style lang="scss" scoped>
.pagination {
  height: 0.32rem;
  width: 100%;
  margin-top: 0.08rem;
}
:deep(.el-pager li) {
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
  margin: 0 2px;
  font-size: 0.14rem;
}
:deep(.el-pagination button) {
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
  // margin: 0 2px;
  font-size: 0.14rem;
}
:deep(.el-pager li.is-active) {
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
  color: #002766;
}
</style>
