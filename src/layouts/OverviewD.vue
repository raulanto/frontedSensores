<script setup lang="ts">
import ViewArea from '../components/ViewArea.vue'
import ViewCircular from '../components/ViewCircular.vue'
import ViewLinear from '@/components/ViewLinear.vue'
import { initFlowbite } from 'flowbite'
import { onMounted } from "vue";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <!-- Titulo -->
  <h1
    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
  >
    Graficas de lecturas
  </h1>


  <div id="accordion-open" data-accordion="open">
    <section>
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
        <span class="flex items-center"
        ><svg
          class="w-5 h-5 me-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Porcentajes</span
        >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <section
            class="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 w-full"
          >
            <div class="flex justify-center items-center w-full">
              <ViewCircular :fk="9" :name="'pH'"></ViewCircular>
            </div>
            <div class="flex justify-center items-center w-full">
              <ViewCircular :fk="8" :name="'Oxigeno disuelto'"></ViewCircular>
            </div>
            <div class="flex justify-center items-center w-full">
              <ViewCircular :fk="18" :name="'Ozono'"></ViewCircular>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="true"
          aria-controls="accordion-open-body-2"
        >
        <span class="flex items-center"
        ><svg
          class="w-5 h-5 me-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path></svg
        >Graficas</span
        >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <!-- Primer grafico central -->
          <section class="h-fit mb-4">
            <ViewArea :name="'Oxiegeno disuelto'" :fk="8"></ViewArea>
          </section>
          <section class="mb-4">
            <ViewArea :name="'Caudal Filtro 1'" :fk="11"></ViewArea>
          </section>
          <section class="mb-4">
            <ViewArea :name="'Caudal Reservorio '" :fk="12"></ViewArea>
          </section>
          <section class="mb-4">
            <ViewArea :name="'pH'" :fk="13"></ViewArea>
          </section>
        </div>
      </div>
    </section>
    <section>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="true"
          aria-controls="accordion-open-body-3"
        >
        <span class="flex items-center"
        ><svg
          class="w-5 h-5 me-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Estado y grafica</span
        >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <section class="  mb-4">
            <ViewLinear :name="'Ozono'" :fk="18" :name2="'Ozono estado'" :fk2="19"></ViewLinear>
          </section>
        </div>
      </div>
    </section>
    <section>
      <h2 id="accordion-open-heading-4">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-4"
          aria-expanded="true"
          aria-controls="accordion-open-body-4"
        >
        <span class="flex items-center"
        ><svg
          class="w-5 h-5 me-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Temperaturas</span
        >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-4" class="hidden" aria-labelledby="accordion-open-heading-4">
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <section class="h-fit mb-4">
            <ViewArea :name="'Temperatura Reservorio'" :fk="10"></ViewArea>
          </section>
          <section class="h-fit mb-4">
            <ViewArea :name="'Temperatura tanque'" :fk="9"></ViewArea>
          </section>
        </div>
      </div>
    </section>
    <section>
      <h2 id="accordion-open-heading-5">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-5"
          aria-expanded="true"
          aria-controls="accordion-open-body-5"
        >
        <span class="flex items-center"
        ><svg
          class="w-5 h-5 me-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          WATSS </span
        >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-5" class="hidden" aria-labelledby="accordion-open-heading-5">
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <section class="h-fit mb-4">
            <ViewArea :name="'WATSS_BOMBA3'" :fk="16"></ViewArea>
          </section>
          <section class="h-fit mb-4">
            <ViewArea :name="'WATSS_BOMBA2'" :fk="15"></ViewArea>
          </section>
          <section class="h-fit mb-4">
            <ViewArea :name="'WATSS_BOMBA1'" :fk="14"></ViewArea>
          </section>
        </div>
      </div>
    </section>
    <section>
      <h2 id="accordion-open-heading-6">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-6"
          aria-expanded="true"
          aria-controls="accordion-open-body-6"
        >
        <span class="flex items-center"
        ><svg
          class="w-5 h-5 me-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          WATSS porcentaje</span
        >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-6" class="hidden" aria-labelledby="accordion-open-heading-6">
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <section
            class="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 w-full"
          >
            <div class="flex justify-center items-center w-full">
              <ViewCircular :fk="16" :name="'WATSS_BOMBA3'"></ViewCircular>
            </div>
            <div class="flex justify-center items-center w-full">
              <ViewCircular :fk="15" :name="'WATSS_BOMBA2'"></ViewCircular>
            </div>
            <div class="flex justify-center items-center w-full">
              <ViewCircular :fk="14" :name="'WATSS_BOMBA1'"></ViewCircular>
            </div>
          </section>
        </div>
      </div>
    </section>


  </div>
</template>