<template>
  <div>
<!--    <el-row :gutter="20">-->
<!--      <el-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">-->
<!--        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">-->
<!--          <count-to :end="infor.count" count-class="count-style"/>-->
<!--          <p>{{ infor.title }}</p>-->
<!--        </infor-card>-->
<!--      </el-col>-->
<!--    </el-row>-->
    <div style="margin-top: 15px"></div>
    <el-row :gutter="20" style="margin-top: 10px;">
      <el-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <el-card shadow>
          <chart-pie style="height: 360px;" :value="pieData" text="本年度新增量"></chart-pie>
        </el-card>
      </el-col>
      <el-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <el-card shadow>
          <chart-bar style="height: 360px;" :value="barData" text="每周用户活跃量"/>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-card shadow>
        <example style="height: 400px;"/>
      </el-card>
    </el-row>
  </div>
</template>

<script>
// import InforCard from '_c/info-card'
// import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    // InforCard,
    // CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 135, name: '专利申请' },
        { value: 210, name: '专利授权' },
        { value: 110, name: '专利转化' },
        { value: 23, name: '商标' },
        { value: 335, name: '软件著作权' },
        { value: 548, name: '获奖情况' },
        { value: 48, name: '商业秘密' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
