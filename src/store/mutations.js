import {
	RC_CURRENT_PARAM,
	RC_USER_INFO,
	RC_RELAY_THIRD_PARAM
} from './mutation-types'

export default {
	[RC_CURRENT_PARAM](state, data) {
		if (data) {
			state.currents = _.extend({},state.currents,data)
		}
	},
	[RC_USER_INFO](state,data){
		if(!data) data = {};
		var conf = window.serverConfig;
		_.extend(state.userinfo,data,conf)
	},
	[RC_RELAY_THIRD_PARAM](state,data){
		_.extend(state.shareTird,data)
	}
}