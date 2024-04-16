<script setup lang="ts">
import { useEquipoStore } from '@/stores/Equipos'
import { onMounted } from 'vue'
import TableEquipo from '@/components/TableEquipo.vue';
const equipoStore = useEquipoStore()

onMounted(() => {
    equipoStore.fetchDatosEquipos()
})
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <article class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <h1 class="text-center w-full font-bold text-4xl text-gray-700 dark:text-gray-400"> Equipos</h1>
                </div>
                <div class="overflow-x-auto">
                    <TableEquipo :equipo="equipoStore.datosEquipos"></TableEquipo>
                </div>
                
            </div>
        </article>
    </section>
</template>
