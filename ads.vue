<script setup>




new Vue({
  el: '#app',
  components: {
    apexchart: VueApexCharts,
  },
  data: {

    series: [{
      name: 'Flies',
      data: data1
    },{
      name: 'Spiders',
      data: data2
    }],
    chartOptions: {
      chart: {
        id: 'chart2',
        type: 'line',
        height: 230,
        dropShadow: {
          enabled: true,
          enabledOnSeries: [1]
        },
        toolbar: {
          autoSelected: 'pan',
          show: false
        }
      },
      colors: ['#008FFB', '#00E396'],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [2,6],
        curve: ['straight','monotoneCubic']
      },
      fill: {
        opacity: [1,0.75],
      },
      markers: {
        size: 0
      },
      yaxis: [
        {
          seriesName: 'Flies',
          axisTicks: {
            show: true,
            color: '#008FFB'
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
          },
          title: {
            text: "Flies",
            style: {
              color: '#008FFB'
            }
          },
        },
        {
          seriesName: 'Spiders',
          opposite: true,
          axisTicks: {
            show: true,
            color: '#00E396'
          },
          axisBorder: {
            show: true,
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396'
            }
          },
          title: {
            text: "Spiders",
            style: {
              color: '#00E396'
            }
          },
        }
      ],
      xaxis: {
        type: 'datetime'
      }
    },

    seriesLine: [{
      name: 'Flies',
      data: data1
    },{
      name: 'Spiders',
      data: data2
    }],
    chartOptionsLine: {
      chart: {
        id: 'chart1',
        height: 130,
        type: 'area',
        brush:{
          target: 'chart2',
          enabled: true
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('24 April 2017').getTime(),
            max: new Date('29 May 2017').getTime()
          }
        },
      },
      colors: ['#008FFB', '#00E396'],
      stroke: {
        width: [1, 3],
        curve: ['straight', 'monotoneCubic']
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        }
      },
      xaxis: {
        type: 'datetime',
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        max: 100,
        tickAmount: 2
      }
    },


  },

})

</script>

<template>

</template>

<style scoped>

</style>