<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <main class="dark:border-gray-600 dark:bg-gray-900">

    <router-view></router-view>

  </main>
</template>
