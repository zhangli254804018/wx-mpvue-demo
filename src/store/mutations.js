import {
	RC_CURRENT_PARAM,
	RC_USER_INFO,
	RC_RELAY_THIRD_PARAM,
	RC_RELAY_SET_STORGE
} from './mutation-types'

export default {
	[RC_CURRENT_PARAM](state, data) {
		if (!data) data = {};
		state.currents = _.extend({}, state.currents, data)
	},
	[RC_USER_INFO](state,data){
		if(!data) data = {};
		_.extend(state.userinfo,data)
	},
	[RC_RELAY_THIRD_PARAM](state,data){
		if(!data) data = {};
		_.extend(state.shareTird,data)
	},
	[RC_RELAY_SET_STORGE](state, data) {
		if (!data) data = {};
		const objs = {}
		const key = data.key;
		const obj = data.obj;
		objs[key] = obj 
		wx.setStorageSync(key, obj)
		_.extend(state.storage, objs)
	}
}