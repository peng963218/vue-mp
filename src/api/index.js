import * as v1 from './V1'

const api = {
  ...v1,
  install(Vue) {
    Vue.prototype.$api = api
  }
}


export default api
