<template>
  <div ref="dom"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from '_c/charts/theme.json'
import { on, off } from '@/libs/tools'
const legend = ['专利', '软件著作权', '商标数', '专利转化']
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'serviceRequests',
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    renderLineChart (data) {
      this.chart = echarts.init(this.$refs.dom, 'tdTheme')
      let colors = [
        '#C1E5E6',
        '#9DD0D4',
        '#75BBC1',
        '#4BA7AF',
        '#00939C',
        '#108188'
      ]
      let _count = data.map(function (item) {
        return item[4]
      })
      let countMax = Math.max.apply(Math, _count)
      countMax = Math.floor(countMax * 1.2)
      let option = {
        color: colors,
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: data.map(function (item) {
            return item[0]
          })
        },
        yAxis: [
          {
            type: 'value',
            name: '数量',
            min: 0,
            max: countMax,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        dataZoom: [{
          startValue: '2014-06'
        }, {
          type: 'inside'
        }],
        legend: {
          date: legend
        },
        grid: {
          show: false,
          left: 20,
          right: 30,
          top: 30,
          bottom: 30
        },
        series: []
      }
      legend.map((o, i) => {
        option.series.push({
          name: o,
          type: 'line',
          data: data.map(function (item) {
            return item[i + 1]
          })
        })
      })
      this.chartOption = option
      this.chart.setOption(option)
    },
    generate () {
      let retValue = []
      let start = 2005
      let end = 2019
      let date = new Date()
      for (let i = start; i <= end; i++) {
        for (let k = 0; k < 12; k++) {
          if (date.getFullYear() === i && k > date.getMonth()) break
          let years = i + '-' + (k < 10 ? '0' + k : k)
          let _data = [
            years,
            Math.round(Math.random() * 20),
            Math.round(Math.random() * 40),
            Math.round(Math.random() * 20),
            Math.round(Math.random() * 50)
          ]
          retValue.push(_data)
        }
      }
      return retValue
    }
  },
  mounted () {
    this.$nextTick(() => {
      let data = this.generate()
      this.renderLineChart(data)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
