import Vue from 'vue'
import Vuex from 'vuex'
import state from './state' //state
import getters from './getters' //getters
import * as actions from './actions' //actions
import mutations from './mutations' //mutations
import home from './modules/home/index' //code modules

Vue.use(Vuex)

//init store
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
    	home
    }
})