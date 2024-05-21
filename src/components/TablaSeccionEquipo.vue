<script setup lang="ts">
import { defineProps } from 'vue'
import type { DatosLectura } from '@/types/SeccionEquipo'

// Definir las propiedades con un tipo más específico
const props = defineProps<{
    equipo: DatosLectura[] | null | undefined
}>()
</script>

<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-4 py-3">Id</th>
                <th scope="col" class="px-4 py-3">Nombre Equipo</th>
                <th scope="col" class="px-4 py-3">Equipo</th>
                <th scope="col" class="px-4 py-3">descripcion</th>
            </tr>
        </thead>
        <tbody>
            <!-- Manejo de casos de borde -->
            <template v-if="props.equipo">
                <tr v-for="dato in props.equipo" :key="dato.id">
                    <td class="px-4 py-3">{{ dato.id }}</td>
                    <td class="px-4 py-3">{{ dato.nombre }}</td>
                    <td class="px-4 py-3">{{ dato.fkequipo_nombre }}</td>
                    <td class="px-4 py-3">{{ dato.descripcion }}</td>

                </tr>
            </template>
            <template v-else>
                <tr>
                    <td colspan="4" class="px-4 py-3 text-center text-red-500">No hay datos disponibles</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
