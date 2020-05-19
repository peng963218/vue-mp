export const forEachs = (arr, fn) => {
    if (!arr.length || !fn) {
        return
    }
    let i = -1
    let len = arr.length
    while (++i < len) {
        let item = arr[i]
        fn(item, i, arr)
    }
}
/**
 * 本地存储
 * @param key 存储数据的key
 * @param list 要存的数据
 */
export const setSession = (key, list) => {
    sessionStorage[key] = escape(JSON.stringify(list))
    // sessionStorage.setItem(name, list)
}
/**
 * 获取本地存储的值
 * @param key 所存数据的 key
 * @returns {null} 默认返回 null
 */
export const getSession = key => {
    try {
        return sessionStorage[key] ? JSON.parse(unescape(sessionStorage[key])) : null
    } catch (e) {
        return null
    }
}

/**
 * 本地存储
 * @param key 存储数据的key
 * @param list 要存的数据
 */
export const setLocal = (key, list) => {
    localStorage[key] = escape(JSON.stringify(list)) //JSON.stringify转换成json字符串
    // escape() js加密方法
    // unescape() js解密方法
    // sessionStorage.setItem(name, list)
}

/**
 * 获取本地存储的值
 * @param key 所存数据的 key
 * @returns {null} 默认返回 null
 */
export const getLocal = key => {
    try {
        return localStorage[key] ? JSON.parse(unescape(localStorage[key])) : null //JSON.parse 转换成json
    } catch (e) {
        return null
    }
}

/**
 * 深拷贝
 * @param data
 * @return {{}|*}
 */
export const deepCopy = data => {
    const t = typeOf(data)
    let o
    if (t === 'array') {
        o = []
    } else if (t === 'object') {
        o = {}
    } else {
        return data
    }
    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]))
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i])
        }
    }
    return o
}
