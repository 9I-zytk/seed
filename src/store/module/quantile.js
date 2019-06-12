/**
 * Created by 9I
 * @Date 2019/2/19
 * @description
 */
import { getToken } from '@/libs/util'
import { saveClassify } from '@/api/classify'

export default {
  state: {
    token: getToken()
  },
  mutations: {
  },
  actions: {
    // save classification results
    saveClassify ({ state, commit }, { name, classType, field, k }) {
      return new Promise((resolve, reject) => {
        try {
          let params = {
            token: state.token,
            name: name,
            classType: classType,
            field: field,
            k: k
          }
          debugger
          saveClassify(params).then(res => {
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
