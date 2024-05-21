<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import {defineProps} from 'vue';


const props = defineProps({
    series: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fecha: {
        type: Array
    }
});

let chartSeries = props.series
let labelValor=props.name

const datanueva = [{
    name: labelValor,
    data: chartSeries
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

let chartOptions: ApexCharts.ApexOptions;
chartOptions = {
    chart: {
        type: 'area',
        height: "auto",
        width:'auto',
        maxWidth: "auto",
        fontFamily: "Inter, sans-serif",
        stacked: false,
        offsetX: 0,


        zoom: {
            enabled: true,
            type: 'x',
            autoScaleYaxis: false,
            zoomedArea: {
                fill: {
                    color: '#f69971',
                    opacity: 0.4
                },
                stroke: {
                    color: '#c54a08',
                    opacity: 0.4,
                    width: 1
                }
            }
        },

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
        max: maximo // Cambiado a valor numérico
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
              colors: ['#1f1919'],
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
      colors: ['#f47836', '#e9731e', '#f69971'], // Colors of the markers
        hover: {
            sizeOffset: 4,

        }
    },
  tooltip: {
    enabled: true, // Enable tooltips
    shared: true, // If multiple series are shown in a chart, show tooltip for all series
    intersect: false, // Show tooltip only when cursor intersects a data point
    followCursor: true, // Make tooltip follow cursor
    theme: 'light', // Can be 'light' or 'dark'


    style: {
      fontSize: '12px',
      fontFamily: undefined
    },
    onDatasetHover: {
      highlightDataSeries: true,
    },
    x: {
      show: true,
      format: 'dd MMM', // Date format
      formatter: undefined, // Custom formatter function
    },

    z: {
      formatter: undefined,
      title: 'Size: '
    },
    marker: {
      show: true,
    },
    items: {
      display: 'flex',
    },
    fixed: {
      enabled: false,
      position: 'topRight',
      offsetX: 0,
      offsetY: 0,
    },
  },


};


</script>
<template>
    <VueApexCharts  type="area" height="350px" :options="chartOptions" :series="datanueva"></VueApexCharts>
</template>
