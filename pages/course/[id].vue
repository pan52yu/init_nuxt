<script setup>
const route = useRoute()
</script>

<template>
  <h1>课程id为 {{ route.params.id }}</h1>
</template>
