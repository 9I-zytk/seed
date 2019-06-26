<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { on, off } from '@/libs/tools'
echarts.registerTheme('tdTheme', tdTheme)
const xAxisData = ['厦门分院', '杭州分院', '信息中心', '中铁建大桥设计研究院', '电气设计研究院', '设备设计研究院', '通信信号研究设计处', '隧道设计研究院', '地质路基设计研究院', '线路战场设计研究院']
const legend = ['专利', '软件著作权', '商标数', '专利转化']
const yData = [32, 38, 58, 12, 8, 4, 12, 19, 34, 20]
export default {
  name: 'ChartBar',
  props: {
    value: Object,
    text: String,
    subtext: String
  },
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    generate () {
      let retValue = []
      yData.map((o, i) => {
        let value = yData[i] + Math.round(Math.random() * 100)
        retValue.push(value)
      })
      return retValue
    }
  },
  mounted () {
    const _this = this
    this.$nextTick(() => {
      // let xAxisData = Object.keys(this.value)
      // let seriesData = Object.values(this.value)
      let colorRange = [
        '#C1E5E6',
        '#9DD0D4',
        '#75BBC1',
        '#4BA7AF',
        '#00939C',
        '#108188'
      ]
      // let colorRange = [
      //   '#C22E00',
      //   '#DA6436',
      //   '#EC9370',
      //   '#F8C0AA',
      //   '#FEEEE8',
      //   '#B2DCDF',
      //   '#65B3BA',
      //   '#49A6AE',
      //   '#00939C'
      // ]
      let option = {
        backgroundColor: '#FFFFFF',
        title: {
          // text: '检查企业信息分析'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            // magicType: {show: true, type: ['stack', 'tiled']},
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        grid: {
          left: '15',
          right: '20',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: legend
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {
          type: 'value'
        },
        series: []
      }
      legend.map((o, index) => {
        option.series.push({
          name: o,
          type: 'bar',
          itemStyle: {
            normal: { color: colorRange[index] }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          },
          data: _this.generate()
        })
      })
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
