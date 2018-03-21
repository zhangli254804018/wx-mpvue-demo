export default {
	homeInfo(state, getters, rootState) {
		const blessingData = _.extend({}, state.info, rootState.initTird)
		if (_.has(blessingData,'clist')){
			_.each(blessingData.clist,function(item){
				item.urls = []
				_.each(item.url,function(items){
					item.urls.push(items.img)
				})
			})
		}
		return blessingData
	}
}