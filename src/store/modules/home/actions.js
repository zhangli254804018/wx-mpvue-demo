import * as types from '../../mutation-types'
import Vue from 'vue';
// import { Base64 } from 'base64'
import { objectUrl } from '../../../api/filters'

//生成邀請碼
export const getShowInfo = ({ commit, state , rootState }, obj) => {
	if(!obj) obj = { }
    const url = rootState.request.getConstellationInfo
    return new Promise(function(resolve,reject){
    	Vue.http.jsonp(url,{ params: obj , timeout: 5000 }).then(function(ret){
    		ret = _.isObject(ret) ? ret : JSON.parse(ret)
            ret = ret ? ret.body : '';
            if(ret){
                commit(types.RC_SHOW_INFO, ret)
                resolve()
            }else{
            	reject(ret.message)
            }
    	})
    })
}

//兌換徽章
export const getExchange = ({ commit, state, rootState }, obj) => {
    if (!obj) obj = {}
    const url = rootState.request.convertConstellationScore
    return new Promise(function (resolve, reject) {
        Vue.http.jsonp(url, { params: obj, timeout: 5000 }).then(function (ret) {
            ret = _.isObject(ret) ? ret : JSON.parse(ret)
            ret = ret ? ret.body : '';
            if (ret) {
                // commit(types.RC_SHOW_INFO, ret)
                resolve(ret)
            } else {
                reject(ret.message)
            }
        })
    })
}

//兌換的記錄啊
export const getRecord = ({ commit, state, rootState }, obj) => {
    if (!obj) obj = {}
    const url = rootState.request.constellationShakeRecord
    return new Promise(function (resolve, reject) {
        Vue.http.jsonp(url, { params: obj, timeout: 5000 }).then(function (ret) {
            ret = _.isObject(ret) ? ret : JSON.parse(ret)
            ret = ret ? ret.body : '';
            if (ret.data) {
                commit(types.RC_LUCK_RECORD, { list: ret.data.list, num: ret.data.num, rootState: rootState})
                resolve(ret)
            } else {
                reject(ret.message)
            }
        })
    })
}


//抽獎的記錄啊
export const getLuck = ({ commit, state, rootState }, obj) => {
    if (!obj) obj = {}
    const url = rootState.request.constelllLuck
    return new Promise(function (resolve, reject) {
        Vue.http.jsonp(url, { params: obj, timeout: 5000 }).then(function (ret) {
            ret = _.isObject(ret) ? ret : JSON.parse(ret)
            ret = ret ? ret.body : '';
            if (ret.data) {
                commit(types.RC_LUCK_GET, ret.data)
                resolve(ret.data)
            } else {
                reject(ret.msg)
            }
        })
    })
}


