<template>
  <div id="container">
    <cardMain :title="`基础设置`">
      <el-form
        :model="baseData.formData"
        class="form"
        label-width="200px"
        label-position="left"
        ref="ruleFormRef"
        :rules="baseData.rules"
      >
        <el-form-item label="用户名：" class="formItem" prop="name" required>
          <el-input placeholder="请输入" v-model="baseData.formData.name" />
        </el-form-item>
        <el-form-item label="手机号：" class="formItem" prop="phone" required>
          <el-input
            placeholder="请输入"
            v-model="baseData.formData.phone"
            @blur="inputPhone"
          />
        </el-form-item>
        <el-form-item label="年龄：" class="formItem" prop="age">
          <el-input
            placeholder="请输入"
            type="number"
            v-model="baseData.formData.age"
            @blur="inputPrice"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </cardMain>
    <cardMain :title="`色表盘`">
      <div class="colorPan">
        <div class="colorList" v-for="(item, index) in colorList">
          <div
            class="colorChildren"
            v-for="(it, idx) in item.children"
            @click="changecolor(it, idx)"
          >
            <div class="bg" :style="{ backgroundColor: it.color }"></div>
            <div class="text">{{ it.label }}</div>
          </div>
        </div>
      </div>
      <div class="colorPicker">
        <div class="text">背景颜色：</div>
        <el-color-picker
          size="large"
          v-model="store.color"
          show-alpha
          :predefine="predefineColors"
        />
        <div class="text space">{{ store.color }}</div>
      </div>
      <div class="colorPicker">
        <div class="text">文字颜色：</div>
        <el-color-picker
          size="large"
          v-model="store.textColor"
          show-alpha
          :predefine="predefineColors"
        />
        <div class="text space">{{ store.textColor }}</div>
      </div>
    </cardMain>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import colorList from "@/components/js/color.js";
import cardMain from "@/components/card";
import { useInfoStore } from "@/stores";
const store = useInfoStore();
const predefineColors = ref([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "#531DAB",
  "#391085",
  "#22075E",
  "#120338",
  "#595959",
  "#262626",
  "#000000",
]);
const phoneNumber = (rule, value, callback) => {
  const reg =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  if (!value) {
    callback(new Error("请输入手机号"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的手机号"));
  } else {
    callback();
  }
};
const baseData = reactive({
  formData: {
    carName: "",
    price: "",
    transmission: "",
    intakeTypeName: "",
    fuelTankCapacity: "",
    displacementName: "",
    seatNum: "",
  },
  rules: {
    name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    phone: [
      {
        required: true,
        validator: phoneNumber,
        message: "请输入正确的手机号",
        trigger: "blur",
      },
    ],
  },
});
const changecolor = (it, idx) => {
  console.log(it);
  store.color = it.color;
  if (idx > 4) {
    store.textColor = "#FFF";
  } else {
    store.textColor = "#000";
  }
};
const inputPrice = () => {
  if (baseData.formData.price) {
    if (baseData.formData.price < 0) {
      baseData.formData.price = 0;
    } else {
      baseData.formData.price = baseData.formData.price.replace(
        /^0+(\d)/,
        "$1"
      );
    }
  }
};
const inputPhone = () => {
  baseData.formData.phone;
};
</script>
<style lang="scss" scoped>
#container {
  .form {
    width: 100%;
    .formItem {
      width: 45%;
    }
  }
  .colorPan {
    width: 13rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;
    .colorList {
      width: 6rem;
      display: flex;
      justify-content: center;
      .colorChildren {
        height: 100%;
        width: 0.6rem;
        .bg {
          width: 0.6rem;
          height: 0.6rem;
          border: #ccc solid 1px;
        }
        .text {
          height: 0.2rem;
          line-height: 0.2rem;
          font-size: 0.1rem;
          white-space: nowrap;
        }
      }
    }
  }
  .colorPicker {
    width: 6.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-top: 0.24rem;
    .text {
      font-size: 0.16rem;
    }
    .space {
      margin-left: 0.1rem;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
