/**
 * Created by K
 * @Date 2019/3/5
 * @description
 */
import { getColnums } from '@/api/geo-sys'

export default {
  actions: {
    // 获取用户相关信息
    getColnums ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getColnums(state.token).then(res => {
            const data = res.data
            // commit('setVariable', data.avator)
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
