export default {
	homeInfo(state, getters, rootState) {
		const blessingData = _.extend({}, state.info, rootState.initTird)
		return blessingData
	}
}