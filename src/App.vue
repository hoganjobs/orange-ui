<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
const onClick = () => {
  console.log('tsx emit')
}
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Test @click="onClick">
    <template #default>aaa</template>
    <template #title><h3>title</h3></template>
  </Test>
  <!-- 1.primary,secondary,text -->
  <!-- 2.尺寸size -->
  <!-- 3.disabled -->
  <!-- 4.块级block -->
  <!-- 5.iconbutton -->
  <SButton></SButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
