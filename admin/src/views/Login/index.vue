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
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()

    const loginForm = reactive({
      username: 'admin',
      password: '123456'
    })

    const handleLogin = () => {
      sessionStorage.token = '123'
      router.push('/')
      ElMessage.success('登录成功')
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
