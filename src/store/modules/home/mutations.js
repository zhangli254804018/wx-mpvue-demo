import * as types from '../../mutation-types'
//mutations
export default {
    //初始化帖子内容
    [types.RC_SHOW_INFO](state, dataset) {
        state.info = _.extend({}, state.info, dataset)
    },
    [types.RC_LUCK_RECORD](state, dataset) {
        let rootData, list, obj = {} , path = []
        if (_.has(dataset,'rootState')){
            rootData = dataset.rootState
        }
        if(_.has(dataset,'list')){
            list = dataset.list
            _.each(list,function(item){
                const items = _.extend(item, rootData.initTird.lottery_tip[item.index - 1 || 0 ])
                path.push(items)
            })
        }
        obj.list = path
        obj.num = dataset.num
        state.record = _.extend({}, state.record, obj)
    },
    [types.RC_LUCK_GET](state, dataset) {
        state.luck = _.extend({}, state.luck, dataset)
    },
    // [types.RC_THANKS_BELLESS_INFO] (state, dataset) {
    //     if (_.has(dataset, 'total')) {
    //       state.blessing.blessinglist.total = dataset.total
    //     }
    //     let path =_.has(dataset,'list') ? dataset.list : _.toArray(dataset);
    //     _.each(path,function(item,index){
    //         item.rank = index+1
    //     })
    //     if(_.isArray(path)){
    //         state.blessing.blessinglist.list = path
    //     }
    // },
    // [types.RC_LUCK_GET] (state, dataset) {
    //     state.blessing.reword = _.extend({},state.blessing.reword,dataset)
    // },
    // [types.RC_THANKS_REWORD_LIST](state,dataset){
    //     if (_.has(dataset, 'total')) {
    //       state.blessing.rewordList.total = dataset.total
    //     }
    //     let path =_.has(dataset,'list') ? dataset.list : _.toArray(dataset);
    //     _.each(path,function(item,index){
    //         item.rank = index+1
    //     })
    //     if(_.isArray(path)){
    //         state.blessing.rewordList.list = path
    //     }
    // }
}
