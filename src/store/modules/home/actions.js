import * as types from '../../mutation-types'
import Vue from 'vue';
// import { Base64 } from 'base64'
import { objectUrl } from '../../../api/filters'

//生成邀請碼
export const getShowInfo = ({ commit, state, rootState }, obj) => {
    if (!obj) obj = {}
    const url = rootState.request.getConstellationInfo
    return new Promise(function (resolve, reject) {
        Vue.http.jsonp(url, { params: obj, timeout: 5000 }).then(function (ret) {
            ret = _.isObject(ret) ? ret : JSON.parse(ret)
            ret = ret ? ret.body : '';
            if (ret) {
                commit(types.RC_SHOW_INFO, ret)
                resolve()
            } else {
                reject(ret.message)
            }
        })
    })
}
