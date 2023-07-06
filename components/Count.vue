<script setup>
const num = useState("num", () => 0)

const increment = () => {
  num.value++
}

const numOfRef = ref(0)

const incrementRef = () => {
  numOfRef.value++
}
</script>

<template>
  <div>
    <h1>Num: {{ num }}</h1>
    <button @click="increment">+</button>
    <hr />
    <h1>Num: {{ numOfRef }}</h1>
    <button @click="incrementRef">+</button>
  </div>
</template>
