export default {
	homeInfo(state, getters, rootState) {
		const blessingData = _.extend({}, state.info, rootState.initTird)
		return blessingData
	},
	recordInfo(state, getters, rootState) {
		const blessingData = _.extend({}, state.record)
		return blessingData
	},
	luckInfo(state, getters, rootState) {
		const blessingData = _.extend({}, state.luck)
		return blessingData
	},
	route(state, getters, rootState) {
		const blessingData = _.extend({}, state.route)
		return blessingData
	}
}