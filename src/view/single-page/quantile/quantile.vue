<template>
  <div class="quantile page">
    <div class="map" id="map"></div>
    <div class="map-setting">
      <div class="set-block">
        <Form :label-width="80">
          <FormItem label="variable:">
            <Select id="select-field" v-model="field" style="width:200px" placeholder="Choose a field as variable">
              <Option v-for="item in variableList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary" class="pull-right" @click="quantile">Ok</Button>
          </FormItem>
        </Form>
      </div>
      <div class="result">
        <Form class="set-block" style="padding-bottom: 15px">
          <FormItem label="Quantile:">
            <label v-html="field"></label>
          </FormItem>
          <Table :columns="columns" :data="quantileData">
            <template slot-scope="{ row }" slot="color">
              <div :style="{'background-color': row.class}" class="color-cell"></div>
            </template>
          </Table>
          <div class="b-s"></div>
          <FormItem class="b-no-margin">
            <Button type="primary" class="pull-right" @click="exportImage">export image</Button>
          </FormItem>
        </Form>
        <div style="scroll:auto; position:relative; bottom: 0">
          <div class="set-ignore border-top">
            <Collapse v-model="panel" simple>
              <Panel name="1">
                shape center
                <p slot="content">
                  <CellGroup>
                    <Cell title="add mean centers to table" class="border-bottom">
                      <Checkbox v-model="mean" slot="extra">show</Checkbox>
                    </Cell>
                    <Cell title="add centroids to table" class="border-bottom">
                      <Checkbox v-model="centroids" slot="extra">show</Checkbox>
                    </Cell>
                  </CellGroup>
                </p>
              </Panel>
              <Panel name="2">
                thiessen polygons
                <p slot="content">
                  <CellGroup>
                    <Cell title="create thiessen polygons" class="border-bottom">
                      <Checkbox v-model="polygon" slot="extra">show</Checkbox>
                    </Cell>
                    <Cell title="save thiessen polygons" class="border-bottom" disabled>
                    </Cell>
                  </CellGroup>
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'quantile',
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions([
      'getColnums',
      'getMapInfo',
      'saveMapInfo',
      'saveClassify'
    ]),
    init () {
      this.getMap()
      // this.getVariable()
    },
    getMap () {
      let name = 'Guerry'
      this.getMapInfo(name).then(res => {
        let shape = JSON.parse(res.data)
        let prop = shape.features[0].properties
        this.getVariable(prop)
        // console.log(res)
        this.renderMap(shape)
      })
    },
    getVariable (object) {
      for (let key in object) {
        this.variableList.push({
          value: key,
          label: key
        })
      }
    },
    // 渲染地图
    renderMap (shape) {
      //
    },
    quantile () {
      let name = 'Guerry'
      let classType = 'quantile'
      this.saveClassify(name, classType, this.field, 5).then(res => {
        console.log(res)
        // let shape = JSON.parse(res.data)
        // let prop = shape.features[0].properties
        // this.getVariable(prop)
        // // console.log(res)
        // this.renderMap(shape)
      })
    },
    exportImage () {
      this.saveMapInfo({ name: 'baltim', path: 'data/baltimore/baltim.shp' }).then(res => {
        console.log(res)
      })
    }
  },
  data () {
    return {
      field: '',
      variableList: [],
      columns: [
        {
          title: 'Class',
          key: 'class',
          slot: 'color'
        },
        {
          title: 'Scope',
          key: 'scope',
          width: 85
        },
        {
          title: 'Count',
          key: 'count',
          width: 75
        }
      ],
      quantileData: [
        {
          class: 'rgba(66, 88, 77, 0.5)',
          count: 17,
          scope: '1 ~ 7',
          date: '2016-10-03'
        },
        {
          class: 'rgb(51, 74, 90, .8)',
          count: 5,
          scope: '8 ~ 50',
          date: '2016-10-01'
        },
        {
          class: 'rgb(72, 17, 19, .8)',
          count: 21,
          scope: '51 ~ 100',
          date: '2016-10-02'
        }
      ],
      panel: ['1', '2'],
      mean: false,
      polygon: false,
      centroids: false
    }
  }
}
</script>
<style lang="scss">
  @import "quantile";
</style>
