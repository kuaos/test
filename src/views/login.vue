<template>
  <div class="login">
    <div class="loginicon">
      <img src="@/assets/elephant.svg" class="image" />
      <div class="title">kuaos管理平台</div>
    </div>
    <div class="loginFrom">
      <div class="title">登录</div>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="loginData.formData"
        class="form"
        hide-required-asterisk
      >
        <el-form-item label="用户名" label-width="0" prop="phone">
          <template #label>
            <div></div>
          </template>
          <el-input
            v-model="loginData.formData.phone"
            placeholder="请输入用户名"
            clearable
          >
            <template #prefix>
              <div style="width: 0.12rem"></div>
              <img src="@/assets/image/login/user.svg" />
              <div class="inputTitle">用户名</div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="0" prop="password">
          <template #label>
            <div></div>
          </template>
          <el-input
            type="password"
            v-model="loginData.formData.password"
            placeholder="请输入密码"
            show-password
            clearable
          >
            <template #prefix>
              <div style="width: 0.12rem"></div>
              <img src="@/assets/image/login/password.svg" />
              <div class="inputTitle">密码</div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="loginBtn"
            @click="onSubmit(ruleFormRef)"
            :loading="btnloading"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useInfoStore } from "@/stores";
import { login } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
const store = useInfoStore();
const router = useRouter();
const loginData = reactive({
  formData: {
    phone: "18757790338",
    password: "123456",
  },
});
const ruleFormRef = ref("");
const btnloading = ref(false);
const rules = reactive({
  phone: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      min: 3,
      max: 15,
      message: "请输入3到15个字符的的用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    { min: 5, max: 16, message: "请输入5到16位密码", trigger: "blur" },
  ],
});
const onSubmit = async (ruleFormRef) => {
  btnloading.value = true;
  if (!ruleFormRef) return;
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      // login(loginData.formData)
      //   .then((res) => {
      //     console.log(res, "res");
      //     store.userInfo = res.data.userInfoDTO;
      //     store.token = res.data.token;
      //     setToken(res.data.token);
      //     localStorage.setItem(
      //       "userInfo",
      //       JSON.stringify(res.data.userInfoDTO)
      //     );
      //     console.log(store, "登录！！！！！");
      //     ElMessage({
      //       message: "登录成功",
      //       type: "success",
      //     });
      //     router.push("/home");
      //   })
      //   .catch((err) => {
      //     ElMessage.error("密码输入有误，请重新输入");
      //     btnloading.value = false;
      //   });
      ElMessage({
        message: "登录成功",
        type: "success",
      });
      router.push("/home");
    } else {
      ElMessage.error("请输入用户名和密码");
      btnloading.value = false;
    }
  });
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/image/login/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .loginicon {
    position: absolute;
    left: 0.4rem;
    top: 0.36rem;
    display: flex;
    align-items: center;
    .image {
      height: 0.64rem;
      width: 0.64rem;
    }
    .title {
      color: #fff;
      // font-family: Alimama ShuHeiTi;
      font-size: 0.32rem;
      font-weight: 700;
      letter-spacing: 2px;
      margin-left: 0.16rem;
    }
  }
  .loginFrom {
    position: absolute;
    top: 2.82rem;
    right: 3.2rem;
    height: 3.6rem;
    width: 4.4rem;
    border-radius: 0.08rem;
    background: #fff;
    padding: 0.24rem 0.24rem 0.4rem 0.24rem;
    box-sizing: border-box;
    .title {
      color: rgba(0, 0, 0, 0.85);
      font-family: PingFang SC;
      font-size: 0.28rem;
      font-weight: 600;
      height: 0.4rem;
      line-height: 0.4rem;
    }
    .form {
      height: 2.24rem;
      margin-top: 0.32rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .inputTitle {
        margin-left: 0.08rem;
        font-weight: 700;
        width: 0.5rem;
        color: rgba(0, 0, 0, 0.85);
      }
      .loginBtn {
        width: 100%;
        height: 0.54rem;
        border-radius: 0.04rem;
        background: linear-gradient(270deg, #0050b3 0.03%, #1890ff 98.98%);
        color: #fff;
        font-family: PingFang SC;
        font-size: 0.16rem;
        font-weight: 700;
        line-height: 0.54rem;
      }
      .loginBtn:hover {
        background: linear-gradient(270deg, #40a9ff 0.03%, #40a9ff 98.98%);
      }
      .loginBtn:active {
        background: linear-gradient(270deg, #0050b3 0.03%, #1890ff 98.98%);
      }
    }
  }
  :deep(.el-form-item__label) {
    padding: 0;
  }
  :deep(.el-input__inner) {
    height: 0.54rem;
    font-size: 0.16rem;
  }
  :deep(.el-form-item) {
    margin-bottom: 0;
  }
}
</style>
