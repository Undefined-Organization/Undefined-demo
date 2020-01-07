import axios from 'axios'

axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  })
axios.interceptors.response.use(
  function (response) {
    // // 拦截器
    // // 如果求请求状态值为 -996,-997,-998,-999 显示模态框 => token相关
    // let arr = [-996,-997,-998,-999]
    // if(arr.indexOf(response.data.err) !== -1){
    //   // 改变 modalShow的值 => redux
    //   ActionCreater.modal(true)
    // }
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  })

export default axios