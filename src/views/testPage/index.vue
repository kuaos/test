<template>
  <div id="container">
    <cardMain :title="`拖拽测试`">
      <div class="table">
        <div class="tableTitle">
          <div class="tableTitle-title">序号</div>
          <div class="tableTitle-content">补充说明</div>
          <div class="tableTitle-action">操作</div>
        </div>
        <div
          class="tableContent"
          :draggable="true"
          v-for="(item, index) in testData.testList"
          :key="index"
          @dragstart="handleDragstart(index)"
          @drop.prevent="handleDrop()"
          @dragover.prevent="handleDragover(index)"
        >
          <div class="tableContent-title">{{ index + 1 }}</div>
          <div class="tableContent-content">
            <el-input placeholder="请输入" v-model="testData.testList[index]" />
          </div>
          <div class="tableContent-action" @click="delList(index)">删除</div>
        </div>
        <div class="tableContent" @click="addList()">
          <div class="addButton">
            <span style="color: #41b14e">+</span> <span>新增</span>
          </div>
        </div>
      </div>
    </cardMain>
    <div class="bg">
      <!-- 方法一：background-clip ：content-box, border-box，背景无法透明-->
      <div class="flex-column j_c">background-clip</div>
      <!-- 方法二：伪元素叠加，背景无法透明 -->
      <div class="flex-column j_c">伪元素</div>
      <!-- 方法三 :mask遮罩 背景色带透明 -->
      <div class="flex-column j_c">mask</div>
      <!-- mask遮罩 背景透明 -->
      <div class="flex-column j_c">背景透明</div>
      <!-- mask遮罩 背景透明 -->
      <div class="flex-column j_c">透明圆角</div>
      <div class="flex-column j_c">半圆</div>
      <!-- 方法四： border-image + overflow: hidden 边框内不是圆角 -->
      <div class="flex-column j_c">border-image + overflow</div>
      <!-- 方法五：clip-path  边框内不是圆角-->
      <div class="flex-column j_c">clip-path</div>
      <div class="gradualChange">渐变</div>
    </div>
    <div class="btnTest">
      <div v-for="(item, index) in testData.btnList" class="btnItem">
        <el-button
          class="btn"
          :type="item.type"
          :plain="item.plain"
          :round="item.round"
          :icon="item.icon"
          :circle="item.circle"
          :link="item.link"
          :disabled="item.disabled"
          @click="testButton(item, index)"
          :loading="item.btnloading"
        >
          {{ item.name }}
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, h, getCurrentInstance } from "vue";
import cardMain from "@/components/card";
import { useInfoStore } from "@/stores";
import { ElNotification, ElMessage, ElMessageBox } from "element-plus";
import cache from "@/plugins/cache";
const { proxy } = getCurrentInstance();
const store = useInfoStore();
const testData = reactive({
  testList: [
    "用户中心",
    "测试中心",
    "首页",
    "表格测试",
    "表格",
    "个人中心",
    "配置中心",
  ],
  receptionIndex: {
    // 当前正在拖拽的元素索引
    oldItemIndex: -1,
    // 将插入的目标位置索引
    newItemIndex: -1,
  },
  btnList: [
    {
      name: "ElMessage1",
      type: "primary",
      plain: false,
      round: false,
      icon: "Edit",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "ElMessage2",
      type: "success",
      plain: false,
      round: false,
      icon: "Check",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "ElMessageBox1",
      type: "warning",
      plain: false,
      round: false,
      icon: "Message",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "confirm",
      type: "danger",
      plain: false,
      round: false,
      icon: "Star",
      btnloading: false,
      link: false,
      disabled: false,
    },

    {
      name: "prompt",
      type: "info",
      plain: false,
      round: false,
      icon: "Delete",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "Message",
      type: "primary",
      plain: false,
      round: false,
      icon: "Edit",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "ElNotification",
      type: "success",
      plain: false,
      round: false,
      icon: "Check",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "ElNotification",
      type: "warning",
      plain: false,
      round: false,
      icon: "Message",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "ElNotification",
      type: "danger",
      plain: false,
      round: false,
      icon: "Star",
      btnloading: false,
      link: false,
      disabled: false,
    },
    {
      name: "ElNotification",
      type: "info",
      plain: false,
      round: false,
      icon: "Delete",
      btnloading: false,
      link: false,
      disabled: false,
    },
  ],
});
// 开始拖拽时触发
const handleDragstart = (index) => {
  testData.receptionIndex.oldItemIndex = index;
};
// 停止拖拽时触发
const handleDrop = (e) => {
  // 如果位置没有发生改变 什么也不做
  if (
    testData.receptionIndex.newItemIndex ===
    testData.receptionIndex.oldItemIndex
  ) {
    return;
  }
  // 如果位置发生了改变
  changeMarkIndex(
    testData.receptionIndex.oldItemIndex,
    testData.receptionIndex.newItemIndex
  );
};
// 拖拽经过其他元素时触发
const handleDragover = (index) => {
  testData.receptionIndex.newItemIndex = index;
};
// 修改书签索引
const changeMarkIndex = (oldItemIndex, newItemIndex) => {
  console.log(oldItemIndex, newItemIndex);
  // // 删除老的
  const changeItem = testData.testList.splice(oldItemIndex, 1)[0];
  // // 在列表中目标位置增加新的
  testData.testList.splice(newItemIndex, 0, changeItem);
};
const addList = () => {
  testData.testList.push("");
};
const delList = (index) => {
  testData.testList.splice(index, 1);
};
// 测试按钮
const testButton = (item, index) => {
  item.btnloading = true;
  switch (index) {
    case 0:
      proxy.$modal.alertSuccess("厉害");
      item.btnloading = false;
      break;
    case 1:
      proxy.$modal.notifyWarning("厉害");
      item.btnloading = false;
      break;
    case 2:
      ElMessageBox.alert("该模块正在建设中...", "开发中", {
        confirmButtonText: "OK",
        callback: (action) => {
          ElMessage({
            type: "info",
            message: "请耐心等待哦~",
          });
        },
      });
      item.btnloading = false;
      break;
    case 3:
      ElMessageBox.confirm("确定删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "已删除",
          });
        })
        .catch(() => {
          ElMessage({
            type: "error",
            message: "取消删除",
          });
        });
      item.btnloading = false;
      break;
    case 4:
      ElMessageBox.prompt("请输入你的e-mail", "提示", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "Invalid Email",
      })
        .then(({ value }) => {
          ElMessage({
            type: "success",
            message: `你的e-mail是:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消输入",
          });
        });
      item.btnloading = false;
      break;
    case 5:
      ElMessageBox({
        title: "Message",
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        ElMessage({
          type: "info",
          message: `action: ${action}`,
        });
      });
      item.btnloading = false;
      break;
    case 6:
      ElNotification({
        title: "Title",
        message: h("i", { style: "color: teal" }, "This is a reminder"),
      });
      item.btnloading = false;
      break;
    case 7:
      ElNotification({
        title: "Prompt",
        message: "This is a message that does not automatically close",
        duration: 0,
      });
      item.btnloading = false;
      break;
    case 8:
      proxy.$modal.notifyWarning("牛逼");
      proxy.$cache.session.set("sessionObj", "qwqedqwdqdwq");
      item.btnloading = false;
      break;
    case 9:
      proxy.$modal.loading("牛逼");
      proxy.$modal.closeLoading();
      let sessionObj = proxy.$cache.session.get("sessionObj");
      console.log(sessionObj, "sessionObj");
      item.btnloading = false;
      break;
  }
};
</script>
<style lang="scss" scoped>
#container {
  .btnTest {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    .btnItem {
      width: 20%;
      height: 1rem;
      display: flex;
      align-items: center;
      .btn {
        width: 2rem;
        height: 0.5rem;
        margin: auto;
      }
    }
  }
  .table {
    width: 100%;
    line-height: 0.4rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    font-size: 0.14rem;
    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0;
      background-color: rgba(0, 0, 0, 0);
      padding: 0 0.1rem;
    }
    .tableTitle {
      border: 1px solid #dcdfe6;
      background: #f7f8f9;
      display: flex;
      height: 0.4rem;
      .tableTitle-title {
        width: 0.68rem;
        border-right: 1px solid #dcdfe6;
      }
      .tableTitle-content {
        flex: 1;
      }
      .tableTitle-action {
        width: 0.68rem;
        border-left: 1px solid #dcdfe6;
      }
    }
    .tableContent {
      border: 1px solid #dcdfe6;
      border-top: 0px solid #dcdfe6;
      background: #fff;
      display: flex;
      min-height: 0.4rem;
      color: rgba(0, 0, 0, 0.85);
      font-size: 0.14rem;
      line-height: 0.4rem;
      text-align: center;
      align-items: center;
      .tableContent-title {
        width: 0.68rem;
        border-right: 1px solid #dcdfe6;
      }
      .tableContent-content {
        flex: 1;
        border-right: 1px solid #dcdfe6;
        text-align: left;
      }
      .tableContent-action {
        width: 0.68rem;
        color: #ff4215;
        cursor: pointer;
      }
      .addButton {
        height: 100%;
        width: 100%;
        // border: 1px solid #dcdfe6;
        background: #fff;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.14rem;
        color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
      }
      .addButton:hover {
        background: rgba(65, 177, 78, 0.2);
      }
    }
  }
  .bg {
    background-color: #000000;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    padding: 0.12rem;
    .gradualChange {
      width: 2rem;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: #fff;
      border-radius: 0.17rem;
      background: linear-gradient(
        180deg,
        rgba(1, 8, 31, 0.6) 0%,
        rgba(1, 8, 31, 0) 100%
      );
      box-shadow: inset 0px 2px 5px 0px rgba(125, 186, 209, 0.5);
      backdrop-filter: blur(10px);
    }
    .gradualChange::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 1px;
      border-radius: 0.17rem;
      background: linear-gradient(
        360deg,
        rgba(24, 29, 144, 0.43),
        rgba(132, 237, 255, 0.49),
        rgba(13, 62, 160, 0.37)
      );
      mask-image: linear-gradient(red, red), linear-gradient(red, red);
      mask-clip: content-box, padding-box;
      mask-composite: exclude;
      -webkit-mask-composite: destination-out;
    }
    div {
      cursor: pointer;
      position: relative;
      width: 2rem;
      height: 1rem;
      margin-bottom: 20px;
      margin-right: 20px;
      font-size: 0.15rem;
      color: #e2fffd;
      transition: all 0.5s ease-in-out;
    }
    div:hover {
      filter: brightness(1.3);
    }
    div:nth-child(1) {
      --bg: linear-gradient(180deg, #346575 0%, #1a283b 100%);
      --border: linear-gradient(270deg, #455364, #aec9e9, #455364);
      border: 1px solid transparent;
      /* var(--bg)背景色  var(--border)边框色 */
      background-image: var(--bg), var(--border);
      background-origin: border-box;
      background-clip: content-box, border-box;
      border-radius: 10px;
    }
    div:nth-child(2) {
      z-index: 1;
      width: 2rem;
      height: 1rem;
      border-radius: 10px;
      background: linear-gradient(270deg, #455364, #aec9e9, #455364);
    }
    div:nth-child(2)::after {
      content: "";
      position: absolute;
      /* 设置层级为-1，避免遮挡内容 */
      z-index: -1;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      background: linear-gradient(180deg, #27a6a7 0%, #054146 100%);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
    }
    div:nth-child(3),
    div:nth-child(4),
    div:nth-child(5),
    div:nth-child(6) {
      --border-radius: 10px;
      --border-width: 1px;
      --border-color: linear-gradient(
        270deg,
        rgba(69, 83, 100, 1),
        rgba(126, 145, 169, 1),
        rgba(69, 83, 100, 1)
      );
      width: 2rem;
      height: 1rem;
      position: relative;
      color: #fff;
      border-radius: var(--border-radius);
      background: rgba(38, 70, 93, 0.2);
      backdrop-filter: blur(10px);
    }
    div:nth-child(3)::after,
    div:nth-child(4)::after,
    div:nth-child(5)::after,
    div:nth-child(6)::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: var(--border-width);
      border-radius: var(--border-radius);
      background: var(--border-color);
      /* 随便定义一个颜色 */
      --mask-bg: linear-gradient(red, red);
      /* 类似background-clip */
      --mask-clip: content-box, padding-box;
      /* mask允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域 */
      /* mask-image类似background-image 设置了用作元素蒙版层的图像，默认值为none，值为透明图片，或透明渐变 */
      mask-image: var(--mask-bg), var(--mask-bg);
      /* 默认值为border-box，可选值与background-origin相同 */
      mask-clip: var(--mask-clip);
      /* exclude排除，只显示不重合的地方,Firefox支持4个属性 */
      mask-composite: exclude;
      /* 只显示下方遮罩，重合的地方不显示 */
      -webkit-mask-composite: destination-out;
    }
    div:nth-child(4) {
      --border-color: linear-gradient(
        180deg,
        rgba(44, 135, 124, 1),
        rgba(95, 250, 255, 1),
        rgba(63, 166, 156, 1)
      );
      background: transparent;
      box-shadow: -4px 2px 4px 0px rgba(0, 0, 0, 0.2),
        inset 0px 0px 12px 0px rgba(92, 242, 246, 0.61);
    }
    div:nth-child(5) {
      --border-width: 3px;
      --border-radius: 50%;
      --border-color: linear-gradient(180deg, #18f77f, #17ffff);
      background: transparent;
      width: 1rem;
      height: 1rem;
    }
    div:nth-child(6) {
      --border-width: 2px;
      --border-radius: 100px 0 0 100px;
      --border-color: linear-gradient(
        180deg,
        rgba(151, 151, 151, 0.3),
        rgba(131, 150, 162, 1),
        rgba(151, 151, 151, 0.3)
      );
      width: 2rem;
      height: 1rem;
      background: rgba(20, 97, 125, 0.06);
      box-shadow: 4px 2px 4px 0px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
    }
    div:nth-child(7) {
      width: 2rem;
      height: 1rem;
      border-radius: 10px;
      box-shadow: 4px 2px 4px 0px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    div:nth-child(7):after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 4px solid;
      border-image: linear-gradient(
          115deg,
          #4fcf70,
          #fad648,
          #a767e5,
          #12bcfe,
          #44ce7b
        )
        2 2;
    }
    div:nth-child(8) {
      width: 2rem;
      height: 1rem;
      border: 4px solid;
      border-image: linear-gradient(270deg, #18f77f, #17ffff) 1 1;
      clip-path: inset(0 round 10px);
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      padding: 0;
      margin: 0;
    }
    .flex-wrap {
      display: flex;
      flex-wrap: wrap;
    }
    .flex-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .j_c {
      justify-content: center;
    }
  }
}
</style>
