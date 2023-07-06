<script lang="ts" setup>
const layout = "default"
const runtimeConfig = useRuntimeConfig()
console.log("apiSecret", runtimeConfig.apiSecret)
console.log("baseURL", runtimeConfig.public.baseURL)
</script>

<template>
  <!-- <div>
    <h1>Welcome to the App...</h1>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/users">用户</nuxt-link>
    <nuxt-link to="/users/create-or-edit">用户添加</nuxt-link>
    <nuxt-link to="/roles/admin">角色-管理员</nuxt-link>
    <nuxt-link to="/roles/normal">角色-普通</nuxt-link>
    <nuxt-link to="/course/1">课程</nuxt-link>
    <nuxt-link to="/about">关于</nuxt-link>

    <nuxt-page />
  </div> -->
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
a {
  margin-right: 10px;
}
</style>
