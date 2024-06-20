<template>
  <div id="container">
    <div class="main">
      <Table
        :border="false"
        :checked="true"
        :tableData="spotData.tableData"
        :isIndex="true"
        :column="spotData.column"
      >
        <template v-slot:name="scope">
          <span>{{ scope.data.name }}</span>
        </template>
        <template v-slot:scenicSpotPhone="scope">
          <span>{{ scope.data.scenicSpotPhone }}</span>
        </template>
        <template v-slot:TableAction="scope">
          <el-button
            class="edit"
            link
            type="success"
            @click="toOperation('edit', scope.data)"
            >编辑</el-button
          >
          <el-button link type="danger" class="del" @click="delSpot(scope.data)"
            >删除</el-button
          >
        </template>
      </Table>
      <pagination
        :total="total"
        @sizeChange="handleSizeChange"
        @currentChange="handleCurrentChange"
      ></pagination>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useInfoStore } from "@/stores";
import { getSpotList, deleteSpot } from "@/api/lylxbc";
import Table from "@/components/Table";
import pagination from "@/components/pagination";
import { ElNotification, ElMessage, ElMessageBox } from "element-plus";
const router = useRouter();
const store = useInfoStore();
const total = ref(0);
const search = ref("");
const spotData = reactive({
  tableData: [],
  params: {
    pageNum: 1,
    pageSize: 10,
    name: "",
  },
  column: [
    { prop: "name", label: "景区名称", width: "250", action: true },
    {
      prop: "scenicSpotPhone",
      label: "景区联系方式",
      width: "220",
      action: true,
    },
    { prop: "address", label: "景区地址" },
    { prop: "openTime", label: "开放时间", width: "220" },
    { prop: "gmtModyfied", label: "更新时间", width: "250" },
    { prop: "TableAction", label: "操作", width: "150" },
  ],
});
const getInfo = () => {
  getSpotList(spotData.params)
    .then((res) => {
      console.log(res);
      spotData.tableData = res.data.data;
      total.value = res.data.totalNum;
    })
    .catch((err) => {});
};
const multipleSelection = ref([]);
const handleSelectionChange = (e) => {
  multipleSelection.value = e;
};
const handleSizeChange = (e) => {
  console.log(`${e} items per page`);
  spotData.params.pageSize = e;
  getInfo();
};
const handleCurrentChange = (e) => {
  console.log(`current page: ${e}`);
  spotData.params.pageNum = e;
  getInfo();
};
const toOperation = (state, scope) => {
  developing();
};
const delSpot = (row) => {
  ElMessageBox.confirm("确定删除此景区？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      developing();
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消删除",
      });
    });
};
const developing = () => {
  ElMessageBox.alert("该模块正在建设中...", "开发中", {
    confirmButtonText: "OK",
    callback: (action) => {
      ElMessage({
        type: "info",
        message: "请耐心等待哦~",
      });
    },
  });
};
getInfo();
</script>
<style lang="scss" scoped>
#container {
  // height: calc(100% - 0.32rem);
  .main {
    margin-left: 0.16rem;
    width: calc(100% - 0.32rem);
    height: calc(100% - 0.68rem);
    background-color: #fff;
    padding: 0.2rem 0.24rem 0.24rem 0.24rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0.12rem rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    .selLine {
      height: 0.32rem;
      width: 100%;
      margin-bottom: 0.16rem;
      display: flex;
      justify-content: space-between;
      .searchInput {
        height: 100%;
        width: 3.28rem;
      }
      .reset {
        height: 100%;
        width: 0.6rem;
        font-size: 0.14rem;
        color: rgba(0, 0, 0, 0.85);
      }
    }
    .funcLine {
      height: 0.32rem;
      width: 100%;
      margin-bottom: 0.16rem;
      display: flex;
      .btn {
        height: 100%;
        font-size: 0.14rem;
        color: rgba(0, 0, 0, 0.85);
        .img {
          margin-right: 0.04rem;
          width: 0.16rem;
          height: 0.16rem;
        }
        // width: 1.08rem;
        // margin-right: 0.08rem;
      }
    }
  }
}
</style>
