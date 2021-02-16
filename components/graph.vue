<template>
  <div class="container graph">
    <div class="legend">
      <Card :total="getTotal(readings)"></Card>
      <div class="day">
        <a href="#" @click.prevent="onClickButton('yesterday')">yesterday</a>
        <a href="#" @click.prevent="onClickButton('today')">today</a>
      </div>
    </div>
    <div class="chart">
      <Chart :chartdata="chartData" :options="chartOptions"></Chart>
    </div>
  </div>
</template>

<script>
import Card from './card'
import Chart from './chart'

export default {
  components: {
    Card,
    Chart
  },
  props: {
    readings: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      chartData: {
        labels: [
          '00', '01', '02', '03', '04', '05',
          '06', '07', '08', '09', '10', '11',
          '12', '13', '14', '15', '16', '17',
          '18', '19', '20', '21', '22', '23'
        ],
        datasets: [
          {
            label: 'Test',
            backgroundColor: 'rgba(255, 206, 86, 1)',
            data: this.getData(this.readings)
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        }
      }
    }
  },
  methods: {
    getTotal: (readings) => {
      return readings.map((r) => {
        return parseInt(r.reading)
      }).reduce((a, b) => {
        return a + b
      }, 0)
    },
    getData (readings) {
      const labels = this.getLabels()
      const times = readings.map((r) => {
        return r.time.slice(11, 13)
      })
      const r = labels.map((l) => {
        if (times.includes(l)) {
          return readings[times.indexOf(l)].reading
        } else {
          return 0
        }
      })
      r.unshift(r.pop())
      return r
    },
    getLabels: () => {
      return [
        '00', '01', '02', '03', '04', '05',
        '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'
      ]
    },
    onClickButton (event) {
      const today = new Date()
      if (event === 'today') {
        this.$emit('clicked', today.toISOString().split('T')[0])
      } else {
        const yesterday = today.setDate(today.getDate() - 1)
        this.$emit('clicked', new Date(yesterday).toISOString().split('T')[0])
      }
    }
  }
}
</script>

<style>
.graph {
  min-height: 100vh;
  background-color: aliceblue;
  color: black;
  flex-direction: column;
  padding: 2rem 14rem;
}

.legend {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
}

.chart {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.day {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
}

.day a {
  color: #2f2f2f;
}
</style>
