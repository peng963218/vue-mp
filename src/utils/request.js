import Axios from "axios";


const service = Axios.create({
  baseURL: process.env['VUE_APP_BASE_API'],
  timeout: 50000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
}) //请求前的拦截

service.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
}) //响应拦截

export default service
