<template>
  <div v-for="i in 10" :key="i">
    NUMBER: {{ randNum() }}
  </div>
</template>

<script setup lang="ts">
const randNum = () => Math.floor(Math.random() * 100);
</script>
