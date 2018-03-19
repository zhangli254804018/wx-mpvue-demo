import * as types from '../../mutation-types'
//mutations
export default {
    //初始化帖子内容
    [types.RC_SHOW_INFO](state, dataset) {
        state.info = _.extend({}, state.info, dataset)
    }
}
