const conf = window.serverConfig
const getApi = conf ? conf.api : '/index.php' //conf.api
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
        'constelllLuck': getApi +'?c=event&a=constellationShake', //新增抽獎接口數據
    },

    'userinfo': {
        'face': "http://img.rcshow.tv/getimg.php?img=653615&lm=1396576701",
        'uid': "3585196",
        'account': "reinette",
        'nick': "嗨 RCshow",
        'dot': "0",
        'coin': "0",
        'money': "/img/richMan/8.png",
        'singerIcon': "/img/singer/02.png",
        'singerLv': 19,
        'token': 0,
        "type": 0,
        "kind": 0,
        "nstat": 0
    },

    //当前位置
    'currents': {
        "tab": {

        },
        "second": {
        }
    },
    //分享第三方獲取到的數據
    'shareTird': {
        'type': 0,
        'uid': 0,
        'token': '',
        'kind': ''
    },
    'initTird': {
        null_lottery_tip: [
            '星座指數不夠喔！</br> 快去送主播【水晶球】吧！'
        ],
        desc_tip: '雙魚座（Pisces）的出生日期為2月19日-3月20日，黃道星座之第十二宮，位於水瓶座之東，白羊座之西。守護星是木星、海王星。代表色是海藍色。雙魚座是冬天和黃道帶的最後一個星座，冬天在它即將離去的時候，把相對意識留給了雙魚座的人。雙魚座的人心中很少有“緊迫感”的概念，身體容易疲勞，噪聲、人群、緊迫的生活節奏會使你精疲力竭。如果生辰天宮圖中沒有更富激勵性的火星或天王星方位的影響，你的漫不經心會容易變成惰性。但你的身上總保持一種天真、忠厚的氣質，你溫情、靈活而且神秘，有可能終生都充滿著幻想。',
        rank_tip_arr: ['水瓶女神', '雙魚女神', '牡羊女神', '金牛女神', '雙子女神', '巨蟹女神', '獅子女神', '處女女神', '天秤女神', '天蝎女神', '射手女神', '摩羯女神'],
        lottery_tip: [
            { name: '恭喜你抽中了牡羊座徽章！', img: require('assets/img/luck/prize/luck-1.png') },
            { name: '恭喜你抽中了金牛座徽章！', img: require('assets/img/luck/prize/luck-2.png') },
            { name: '恭喜你抽中了雙子座徽章！', img: require('assets/img/luck/prize/luck-3.png') },
            { name: '恭喜你抽中了巨蟹座徽章！', img: require('assets/img/luck/prize/luck-4.png') },
            { name: '恭喜你抽中了獅子座徽章！', img: require('assets/img/luck/prize/luck-5.png') },
            { name: '恭喜你抽中了處女座徽章！', img: require('assets/img/luck/prize/luck-6.png') },
            { name: '恭喜你抽中了天秤座徽章！', img: require('assets/img/luck/prize/luck-7.png') },
            { name: '恭喜你抽中了天蝎座徽章！', img: require('assets/img/luck/prize/luck-8.png') },
            { name: '恭喜你抽中了射手座徽章！', img: require('assets/img/luck/prize/luck-9.png') },
            { name: '恭喜你抽中了魔蝎座徽章！', img: require('assets/img/luck/prize/luck-10.png') },
            { name: '恭喜你抽中了水瓶座徽章！', img: require('assets/img/luck/prize/luck-11.png') },
            { name: '恭喜你抽中了雙魚座徽章！', img: require('assets/img/luck/prize/luck-12.png') }
        ],
        modal_tip_arr: ['牡羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '雙魚座'],
        callback_tip: ['恭喜你兌換成功！<br/>', '您尚未登錄！<br/>請先登錄！', '兌換有誤', '目前不在兌換時間內！', '很遺憾！<br/> 你的星座指數還不夠哦！', '你已兌換過了喔！<br/>去看看別的獎勵兌換吧！', '很遺憾！你的星座指數還不夠哦！', '操作過於頻繁', '獎勵發放失敗', '未達成兌換條件'],
    }
}