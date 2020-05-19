import routes from "../../router/router";
import {forEachs, getSession} from "../../utils";
import {setSession} from "../../utils";

/**
 * 整理所有路由
 * @param routes 当前所有路由
 * @returns {[]} 返回整理后的路由
 */
export const filterRoutes = routes => {
    let res = []
    // 循环传入的路由
    forEachs(routes, item => {
        if (item.meta && !item.meta.hidden) {
            let obj = {
                path: item.path,
                name: item.name,
                meta: item.meta
            }
            if (item.children && item.children.length) {
                obj.children = filterRoutes(item.children)
            }
            res.push(obj)
        }
    })
    return res
}

export default {
    state: {
        MENU_LIST: [],
        BG_TOP: getSession('SET_BG_TOP') ? getSession('SET_BG_TOP') : []
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
            setSession('SET_BG_TOP', list) // 保存头部导航状态
        },
        delBgTop({state, commit}, route) {
            let list = state.BG_TOP
            list = list.filter(item => item.name !== route.name)
            commit('SET_BG_TOP', list)
        }
    }
}
