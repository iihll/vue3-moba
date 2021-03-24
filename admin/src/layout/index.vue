<template>
  <el-container style="height: 100vh;">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside>
        <Aside />
      </el-aside>
      <el-main style="background-color: #f7f7f7;">
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main.vue'

export default {
  name: 'Layout',
  components: { Header, Aside, Main }
}
</script>

<style lang="less">
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
}
</style>
