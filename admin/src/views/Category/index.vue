<template>
  <el-button @click="dialogVisible = true">新建分类</el-button>
  <el-table :data="tableData" stripe>
    <el-table-column prop="_id" label="ID"></el-table-column>
    <el-table-column prop="parent.name" label="上级分类"></el-table-column>
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column label="操作">
      <template v-slot="{ row }">
        <el-button
          type="warning"
          size="mini"
          @click="handleEdit(row)"
          >编辑</el-button
        >
        <el-button type="danger" size="mini" @click="handleDel(row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogVisible">
    <el-form @submit.prevent="save" label-width="120px" :model="formData">
      <el-form-item label="上级分类">
        <el-select v-model="formData.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Category',
  setup() {
    const dialogVisible = ref(false)

    const tableData = reactive([])

    const formData = reactive({})

    return {
      dialogVisible,
      tableData,
      formData
    }
  }
})
</script>

<style></style>
