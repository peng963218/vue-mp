import routes from "../../router/router";
import {forEachs} from "../../utils";

/**
 * 整理所有路由
 * @param routes 当前所有路由
 * @returns {[]} 返回整理后的路由
 */
export const filterRoutes = routes => {
  // 新建一个新数组
  let res = []
  // 循环传入的路由
  forEachs(routes, item => {
    // 判断路由是否有 meta 并且 meta 里面的 hidden 为 false
    if (item.meta && !item.meta.hidden) {
      // 新建一个对象并且对象里面有需要用的三个属性
      let obj = {
        path: item.path,
        name: item.name,
        meta: item.meta
      }
      // 判断路由是否有子级路由如果有则 调用 filterRoutes 方法过滤出来 赋值到 obj 的 children 属性里面
      if (item.children && item.children.length) {
        obj.children = filterRoutes(item.children)
      }
      // 把过滤好的路由 push 到 res 数组里面
      res.push(obj)
    }
  })
  return res
}

export default {
  state: {
    MENU_LIST: [],
    BG_TOP: []
  },
  getters: {
    MenuList: () => filterRoutes(routes), // state.MENU_LIST
    bgTop: state => state.BG_TOP
  },
  mutations: {
    SET_MENU_LIST(state, menu) {
      state.MENU_LIST = menu
    },
    SET_BG_TOP(state, routs) {
      /*const list = state.BG_TOP
      if (!list.some(item => item.name === route.name)) {
        list.push(route)
        state.BG_TOP = list
      }*/
      state.BG_TOP = routs
    }
  },
  actions: {
    setMenuList({commit}) {
      commit('SET_MENU_LIST')
    },
    setBgTop({state, commit}, route) {
      let list = state.BG_TOP
      if (!list.some(item => item.name === route.name)) {
        list.push(route)
      }
      commit('SET_BG_TOP', list)
    },
    delBgTop({state, commit}, route) {
      let list = state.BG_TOP
      list = list.filter(item => item.name !== route.name)
      commit('SET_BG_TOP', list)
    }
  }
}
