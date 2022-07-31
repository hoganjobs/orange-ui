<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Test from './components/Test'
import SButton from './button/src/Button'
</script>

<template>
  <test></test>
  <!-- 1.primary,secondary,text -->
  <!-- 2.尺寸size -->
  <!-- 3.disabled -->
  <!-- 4.块级block -->
  <!-- 5.iconbutton -->
  <s-button type="primary">确定</s-button>
  <SButton>取消</SButton>
  <h1 class="text-3xl font-bold underline">Hello World!</h1>
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
