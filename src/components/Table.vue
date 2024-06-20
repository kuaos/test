<template>
  <div class="tab_box">
    <el-table
      ref="table"
      class="table"
      :data="tableData"
      :border="border"
      @selection-change="handleSelectionChange"
      style="width: 100%"
      stripe
    >
      <el-table-column
        v-if="checked"
        type="selection"
        width="55"
        align="center"
      >
      </el-table-column>
      <el-table-column
        v-if="isIndex"
        type="index"
        label="序号"
        width="100"
        align="center"
      >
      </el-table-column>
      <template v-for="(item, index) in column">
        <el-table-column
          v-if="item.prop != 'TableAction'"
          :property="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align"
        >
          <template #default="scope">
            <slot
              v-if="item && item.action"
              :name="item.prop"
              :data="scope.row"
            ></slot>
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :label="item.label"
          :width="item.width"
          :align="item.align"
        >
          <template #default="scope">
            <slot name="TableAction" :data="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script setup>
import { reactive, toRefs, ref, watch, onBeforeMount, onMounted } from "vue";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
const props = defineProps({
  border: {
    type: Boolean,
    default: false,
  },
  checked: {
    // 是否能够多选
    type: Boolean,
    default: false,
  },
  isIndex: {
    // 是否有序号
    type: Boolean,
    default: false,
  },
  tableData: {
    // 表格数据
    type: Array,
    default: () => [],
  },
  column: {
    // 表头设定，egg：{ prop: 'date', label: '日期',width：900 }
    type: Array,
    default: () => [],
  },
});
const color = ref("#002766");
// color.value = store.color;
// watch(
//   () => store.color,
//   (newValue, oldValue) => {
//     color.value = store.color;
//   },
//   { immediate: true, deep: true }
// );
const multipleSelection = ref([]);
const handleSelectionChange = (e) => {
  multipleSelection.value = e;
};
</script>
<style lang="scss" scoped>
.table {
  flex: 1;
  .edit {
    font-size: 0.14rem;
    color: #41b14e;
  }
  .del {
    font-size: 0.14rem;
    color: #ff4215;
  }
}
:deep(.el-checkbox__inner:hover) {
  --color: v-bind(color);
  border-color: var(--color);
}
:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  --color: v-bind(color);
  border-color: var(--color);
  background-color: var(--color);
}
:deep(.el-checkbox__input.is-indeterminate .el-checkbox__inner) {
  --color: v-bind(color);
  border-color: var(--color);
  background-color: var(--color);
}
</style>
