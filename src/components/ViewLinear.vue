<script setup lang="ts">
import {ref, onMounted, defineProps} from 'vue';
import {useLecturaStore} from '../stores/LecturaStore';
import LineChart from "@/common/LineChart.vue";

const lecturaStore = useLecturaStore();

const lecturaStore2 = useLecturaStore();

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  fk: {
    type: Number,
    required: true
  },
  fk2: {
    type: Number,
    required: true
  },
  name2: {
    type: String,
    required: true
  },

});


const Datos = props.name;
const fkvalor=props.fk

const Datos2 = props.name2;
const fkvalor2=props.fk2

const isLoading = ref<boolean>(false);

interface ChartData {
  valor: number | string;
}

const valoresArray = ref<ChartData[]>([]);
const valoresArray2 = ref<ChartData[]>([]);
const valorFecha = ref<string[]>([]);

async function fetchData() {
  isLoading.value = true;
  try {

    await lecturaStore.fetchDatosLectura(fkvalor);


    valoresArray.value = lecturaStore.datosLectura.map(item => item.valor);
    await lecturaStore2.fetchDatosLectura(fkvalor2);
    valoresArray2.value = lecturaStore2.datosLectura.map(item => item.valor);
    valorFecha.value = lecturaStore.datosLectura.map(item => item.created_at);
    console.log(valoresArray2);
    console.log(valoresArray);

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchData();
});

async function recargarDatos() {
  await fetchData();
  console.log('Datos recargados:', valoresArray.value);
}
</script>

<template>
  <div>
    <template v-if="isLoading">
      <div class="text-center">
        <div role="status">
          <svg aria-hidden="true"
               class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
               viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"/>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </template>
    <template v-else-if="valoresArray && valoresArray.length > 0">
      <LineChart  :series="valoresArray" :name="Datos" :series2="valoresArray2" :name2="Datos2"
                     :fecha="valorFecha"></LineChart>
      <button type="button"
              class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none
                focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 text-center dark:bg-primary-600
                dark:hover:bg-primary-700 dark:focus:ring-primary-800" @click="recargarDatos">Recargar datos
      </button>
    </template>
    <template v-else> -->
      <button
        class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none
                focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 text-center dark:bg-primary-600
                dark:hover:bg-primary-700 dark:focus:ring-primary-800" @click="recargarDatos">Recargar datos
      </button>

    </template>
  </div>
</template>