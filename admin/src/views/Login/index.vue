<template>
  <el-card header="请先登录" class="login-card">
    <el-form @submit.prevent="handleLogin" :model="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
        <el-button type="info" native-type="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      model: {}
    }
  },
  setup() {
    const loginForm = reactive({
      username: 'admin',
      password: '123456'
    })

    const handleLogin = () => {
      console.log(loginForm)
    }

    return {
      loginForm,
      handleLogin
    }
  }
})
</script>

<style lang="less" scoped>
.login-card {
  width: 36rem;
  margin: 20rem auto;
}
</style>
