const getApi = '/index.php' //conf.api
const postApi = '/index.php'
export default {
    //localStorage
    'cache': {
        'key': 'PAGEKETS_CAHE'
    },
    //api
    'request': {
        'PGuser': '/index.php?c=user&a=getUserInfo',
        'getConstellationInfo': getApi + '?c=event&a=getConstellationInfo', //获取星座信息
        'convertConstellationScore': getApi + '?c=event&a=convertConstellationScore', //獲取兌換接口 convertType
        'constellationShakeRecord': getApi + '?c=event&a=constellationShakeRecord', //獲取抽獎記錄接口 constellationShakeRecord
        'constelllLuck': getApi + '?c=event&a=constellationShake', //新增抽獎接口數據
    },
    'userinfo': {
        'face': "http://img.rcshow.tv/getimg.php?img=653615&lm=1396576701",
        'uid': "3585196",
        'account': "reinette",
        'nick': "嗨 RCshow",
        'dot': "0",
        'coin': "0",
        'singerLv': 19,
        'token': 0,
        "type": 0,
        "kind": 0,
        "nstat": 0
    },
    //初始化数据
    'initTird':{
        'backgroundAudio':'http://my-wife-1252712744.cosgz.myqcloud.com/video/3432878407.mp3',
        'backgroundVideo':'http://my-wife-1252712744.cosgz.myqcloud.com/video/cyqzl.mp4'
    },
    //本地缓存数据
    'storage': {
        'openBackgroundCover': 0  // wx.getStorageSync('openBackgroundCover')
    }
}