<script lang="ts" setup>
const layout = "default"
</script>

<template>
  <NuxtLayout :name="layout">
    <h1>Welcome to the App...</h1>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/users">用户</nuxt-link>
    <nuxt-link to="/users/create-or-edit">用户添加</nuxt-link>
    <nuxt-link to="/roles/admin">角色-管理员</nuxt-link>
    <nuxt-link to="/roles/normal">角色-普通</nuxt-link>
    <nuxt-link to="/course/1">课程</nuxt-link>
    <nuxt-link to="/about">关于</nuxt-link>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
body {
  margin: 0;
  padding: 0;
}
a {
  margin-right: 10px;
  /* 样式美化 */
  color: #fff;
  background-color: #409eff;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
}

a:hover {
  background-color: #66b1ff;
}

.router-link-exact-active {
  color: #000;
  background-color: #0d71db;
}
</style>
