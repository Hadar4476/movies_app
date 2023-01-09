<template>
  <div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
