<script lang="ts" setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import SideDas from '@/layouts/SidesLyt.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">

    <main class="p-4 md:scroll-ml-60 z-40 h-full pt-20 dark:border-gray-600 dark:bg-gray-900">
      <router-view></router-view>
    </main>
  </div>
</template>