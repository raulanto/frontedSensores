<script lang="ts" setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavDas from '@/layouts/NavbarLyt.vue';
import SideDas from '@/layouts/SidesLyt.vue';


// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>


<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">

    <!-- Navegacion -->
    <NavDas></NavDas>

    <!-- Sidebar -->
    <!-- Navegacion entre paginas -->
<!--    <SideDas></SideDas>-->

    <!-- Vistas de Navegacion de Sidebar -->
    <main class="p-4 md:scroll-ml-60 h-full pt-20 dark:border-gray-600 dark:bg-gray-900">

      <router-view></router-view>
    </main>
  </div>
</template>