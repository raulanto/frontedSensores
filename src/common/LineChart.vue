<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import {defineProps} from 'vue';


const props = defineProps({
  series: {
    type: Array,
    required: true
  },
  series2: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  name2: {
    type: String,
    required: true
  },
  fecha: {
    type: Array
  }
});

let chartSeries = props.series
let labelValor=props.name

let chartSeries2 = props.series2
let labelValor2=props.name2


const datanueva = [{
  name: labelValor,
  data: chartSeries
}];

const datanueva2 = [{
  name: labelValor2,
  data: chartSeries2
}];


function findMaxMin(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("El arreglo no debe estar vacío.");
  }
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return { max, min };
}

const result = findMaxMin(props.series);
const maximo=parseFloat(result.max);
const minimo=parseFloat(result.min);

const result2 = findMaxMin(props.series2);
const maximo2=parseFloat(result2.max);
const minimo2=parseFloat(result2.min);

let chartOptions: ApexCharts.ApexOptions;
chartOptions = {
  chart: {
    id: props.name,
    group: 'datosLect',
    type: 'area',
    height: "auto",
    width: 'auto',
    fontFamily: "Inter, sans-serif",
    stacked: true,
    offsetX: 0,

    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: '#f9ac90', // Cambiado a naranja
          opacity: 0.4
        },
        stroke: {
          color: '#a1460d', // Cambiado a naranja
          opacity: 0.4,
          width: 1
        }
      }
    },
    toolbar: {
      autoSelected: 'pan',
      show: true
    }
  },
  fill: {
    colors: ['#ee905d', '#f1ad7c', '#ecd8c4']
  },
  stroke: {
    curve: 'smooth',
    colors: ['#f2751c'] // Cambiado a naranja
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    min: minimo, // Cambiado a valor numérico
    max: maximo, // Cambiado a valor numérico
    labels: {
      style: {
        colors: ['#f2751c'] // Cambiado a naranja
      }
    }
  },
  xaxis: {
    categories: props.fecha,
    tickAmount: 15,
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: ['#0a0000'], // Cambiado a naranja
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      formatter: undefined,
      datetimeUTC: true,
    },
  },
  title: {
    text: props.name,
    align: 'center',

  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
    colors: ['#f2751c'] // Cambiado a naranja
  },
};



let chartOptions2: ApexCharts.ApexOptions;
chartOptions2 = {
  chart: {
    id: props.name2,
    group: 'datosLect',
    type: 'area',
    height: "auto",
    width: 'auto',
    fontFamily: "Inter, sans-serif",
    stacked: true,
    offsetX: 0,

    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: '#f9ac90', // Cambiado a naranja
          opacity: 0.4
        },
        stroke: {
          color: '#a1460d', // Cambiado a naranja
          opacity: 0.4,
          width: 1
        }
      }
    },
    toolbar: {
      autoSelected: 'pan',
      show: true,
      color: '#f2751c', // Cambiado a naranja
    }
  },
  fill: {
    colors: ['#ee905d', '#f1ad7c', '#ecd8c4']

  },
  stroke: {
    curve: 'smooth',
    colors: ['#f2751c'] // Cambiado a naranja
  },
  dataLabels: {
    enabled: false,

  },
  yaxis: {
    color: '#f2751c', // Cambiado a naranja
    min: minimo2, // Cambiado a valor numérico
    max: maximo2 // Cambiado a valor numérico
  },
  xaxis: {
    color: '#f2751c', // Cambiado a naranja
    categories: props.fecha,
    tickAmount: 15,
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: ['#0a0000'], // Cambiado a naranja
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      formatter: undefined,
      datetimeUTC: true,
    },
  },
  title: {
    text: props.name2,
    align: 'center',
    style: {
      color: '#f2751c' // Cambiado a naranja
    }
  },
  markers: {

    hover: {
      sizeOffset: 4,
    },
    colors: ['#f47836', '#e9731e', '#f69971']
  },
};


</script>
<template>
  <VueApexCharts  type="area" height="350px" :options="chartOptions" :series="datanueva"></VueApexCharts>
  <VueApexCharts  type="area" height="350px" :options="chartOptions2" :series="datanueva2"></VueApexCharts>

</template>
