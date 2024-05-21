<script setup lang="ts">
import {defineProps} from 'vue'
import type {DatosLectura} from '@/types/EquipoModelo'

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
            <th scope="col" class="px-4 py-3">Planta</th>
            <th scope="col" class="px-4 py-3">Producto</th>
            <th scope="col" class="px-4 py-3">Acciones</th>
        </tr>
        </thead>
        <tbody>
        <!-- Manejo de casos de borde -->
        <template v-if="props.equipo">
            <tr v-for="dato in props.equipo" :key="dato.id">
                <td class="px-4 py-3">{{ dato.id }}</td>
                <td class="px-4 py-3">{{ dato.nombre }}</td>
                <td class="px-4 py-3">{{ dato.fkplanta_nombre }}</td>
                <td class="px-4 py-3">{{ dato.fkproducto_nombre }}</td>
                <td class="px-4 py-3">
                    <router-link to="/home/equipo/panel">
                        <button
                            type="button"
                            class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none
                focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 text-center dark:bg-primary-600 
                dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Entrar
                        </button>
                    </router-link>
                </td>
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
