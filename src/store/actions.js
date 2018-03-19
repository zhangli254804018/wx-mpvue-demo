import * as types from './mutation-types';
import { delayBounceAction , parseUrlQuery } from '../api/filters.js';
import Vue from 'vue';
//Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
//Vue.http.jsonp(url, { params: options, timeout: 1500 }).then(function(ret) {

//傳入當前頁面的值
export const currentParam = ({ commit, state }, obj, callback) => {
    if (obj) {
        commit(types.RC_CURRENT_PARAM, obj)
        if (callback) callback()
    }
}

export const initUserInfo =  ({ commit, state } , obj , callback) => {
    if(!obj) obj = {}
    const url = state.request.PGuser
    commit(types.RC_USER_INFO)
}

export const getShareTird =  ({ commit, state } , obj , callback) => {
    if(!obj) var obj = {}
    var query = parseUrlQuery()
    obj = query
    commit(types.RC_RELAY_THIRD_PARAM,obj)
}