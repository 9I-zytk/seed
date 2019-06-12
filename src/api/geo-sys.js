/**
 * Created by 9I
 * @Date 2019/3/5
 * @description
 */
import axios from '@/libs/api.request'

/**
 * @returns {Promise} resolve参数是解析后的二维数组
 * @description 获取map-quantile算法所需传入的字段列表
 */
export const getColnums = () => {
  return axios.request({
    url: 'sys',
    method: 'get'
  })
}
