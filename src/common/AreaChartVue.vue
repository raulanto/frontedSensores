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
                    color: '#90CAF9',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                    opacity: 0.4,
                    width: 1
                }
            }
        },

    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    stroke: {
        curve: 'smooth',
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
              colors: ['#ffffff'],
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

        }
    },


};


</script>
<template>
    <VueApexCharts  type="area" height="350px" :options="chartOptions" :series="datanueva"></VueApexCharts>
</template>
