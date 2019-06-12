/**
 * Created by 9I
 * @Date 2019/2/19
 * @description
 */
import { getMap, saveMap } from '@/api/map'
import { getToken } from '@/libs/util'

export default {
  state: {
    variable: [],
    token: getToken()
  },
  getters: {
    getVariable (state) {
      return state.variable
    }
  },
  mutations: {
    setVariable (state, status) {
      state.variable = status
    }
  },
  actions: {
    // 获取地图信息
    getMapInfo ({ state, commit }, name) {
      return new Promise((resolve, reject) => {
        try {
          getMap(state.token, name).then(res => {
            const data = res.data
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    // 保存地图信息
    saveMapInfo ({ state, commit }, { name, path }) {
      return new Promise((resolve, reject) => {
        try {
          let params = {
            token: state.token,
            name: name,
            path: path
          }
          saveMap(params).then(res => {
            const data = res.data
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
