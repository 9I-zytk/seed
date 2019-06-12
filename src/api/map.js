/**
 * Created by 9I
 * @Date 2019/2/19
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

export const getMap = (token, name) => {
  return axios.request({
    url: 'map',
    params: {
      m_name: name
    },
    method: 'get'
  })
}

export const saveMap = ({ token, name, path }) => {
  let params = {
    token,
    'm_name': name,
    path
  }
  return axios.request({
    url: 'map',
    data: params,
    method: 'post'
  })
}
