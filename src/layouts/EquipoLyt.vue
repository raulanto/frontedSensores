<script setup lang="ts">
import { useEquipoStore } from '@/stores/EquipoStore'
import { onMounted } from 'vue'
import TableEquipo from '@/components/TableEquipo.vue';
const equipoStore = useEquipoStore()
import { initFlowbite } from 'flowbite'

onMounted(() => {
    equipoStore.fetchDatosEquipos()
    initFlowbite();
})
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 h-full">
        <article class="mx-auto max-w-screen-xl px-4 lg:px-12 h-full">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <div class="flex items-center">
                        <h1 class="text-center w-full font-bold text-4xl text-gray-700 dark:text-gray-400">Equipos</h1>

                    </div>
                </div>

            </div>
                <div class="overflow-x-auto h-full">
                    <TableEquipo :equipo="equipoStore.datosEquipos"></TableEquipo>
                </div>
                
            </div>
        </article>
    </section>



</template>
