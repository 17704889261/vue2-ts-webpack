import axios from 'axios'
import { Message } from 'element-ui'

const { serverUrl } = window

const service = axios.create({
  baseURL: serverUrl || '/',
  timeout: 1000 * 2
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Message.error('服务器错误！')
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    Message.error(error.message)
    return error
  }
)

export default service
