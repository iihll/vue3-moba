<template>
  <el-menu router unique-opened :default-active="$router.path">
    <el-submenu index="1">
      <template #title> <i class="el-icon-message"></i>内容管理 </template>
      <el-menu-item-group>
        <template #title>分类</template>
        <el-menu-item index="/category">分类管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title>物品</template>
        <el-menu-item index="/items/create">新建物品</el-menu-item>
        <el-menu-item index="/items/list">物品列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title>英雄</template>
        <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
        <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template #title> <i class="el-icon-message"></i>运营管理 </template>
      <el-menu-item-group>
        <template #title>文章</template>
        <el-menu-item index="/articles/create">新建文章</el-menu-item>
        <el-menu-item index="/articles/list">文章列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title>广告位</template>
        <el-menu-item index="/ads/create">新建广告位</el-menu-item>
        <el-menu-item index="/ads/list">广告位列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template #title> <i class="el-icon-setting"></i>系统设置 </template>
      <el-menu-item-group>
        <template #title>管理员</template>
        <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
        <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
