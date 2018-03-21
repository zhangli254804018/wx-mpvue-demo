//获取我的信息数据
export default {
    //獲取當前的參數
    currentParams(state, getters) {
        return state.currents
    },
    userinfo(state,getters){
    	return state.userinfo
    },
    initTird(state,getters){
        return state.initTird
    },
    storage(state, getters) {
        return state.storage
	}
}