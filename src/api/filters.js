/*
    格式化时间,时间戳转化为时间格式 ——
        参数 ——
            value： 时间戳10位
            type:   为需要的时间格式 'yyyy-MM-dd hh:mm:ss'
        返回 ——
            格式化后的字符串

    使用方式 —— 
        {{data | format_time type}}
*/
export const format_time = (value, type) => {
    if (!value) return null
    let time = value.toString().length > 10 ? new Date(parseInt(value)) : new Date(parseInt(value) * 1000)
    let formatTime = type ? type : 'yyyy-MM-dd'
    let date = {
        "M+": time.getMonth() + 1,
        "d+": time.getDate(),
        "h+": time.getHours(),
        "m+": time.getMinutes(),
        "s+": time.getSeconds(),
        "q+": Math.floor((time.getMonth() + 3) / 3),
        "S+": time.getMilliseconds()
    };
    if (/(y+)/i.test(formatTime)) {
        formatTime = formatTime.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
        if (new RegExp("(" + k + ")").test(formatTime)) {
            formatTime = formatTime.replace(RegExp.$1, RegExp.$1.length == 1 ?
                date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return formatTime;
};


export const GetDateStr = (AddDayCount) => {
    let dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}

/*
    换算方法,大于1w显示1万 少于显示实际 数量格式 ——
        参数 ——
            total：1000 总数
            limit: 4 默认为万位单位 (可以不填) 
            type:  '万'|'千'|'w'|'k' 默认为需要的时间格式 '万'(可以不填)
        返回 ——
            格式化后的字符串

    使用方式 —— 
        {{ total | format_number type limit   }}
*/

export const format_number = (total, limit, type) => {
    if (!total) return 0
    let tyleNum = type ? type : '万'
    let limitNum = limit ? limit : 4
    let totalNum

    totalNum = (total.toString().length > limitNum) ? (total / Math.pow(10, limitNum)).toFixed(1) + tyleNum : total

    return totalNum

};
/*
    延迟方法 ——
        参数 ——
            idle: 延迟时间
            action: callback 回调函数
        返回 ——
            执行action函数

    使用方式 —— 
        delayBounceAction(300,callback)
*/
let delayBounceContainer
export const delayBounceAction = function (idle, action) {
    function delayBounces() {
        let ctx = this,
            args = arguments
        clearTimeout(delayBounceContainer)
        delayBounceContainer = setTimeout(function () {
            action.apply(ctx, args)
        }, idle)
    }
    return delayBounces()
}

//獲取地址欄的參數
export const parseUrlQuery = function (url, type) {
    url = url || location.href;
    var query = {},
        i, params, param;
    if (typeof url === 'string' && url.length) {
        url = (url.indexOf('#') > -1) ? url.split('#')[0] : url;
        if (!type) {
            if (url.indexOf('?') > -1) url = url.split('?')[1];
            else return query;
        }
        params = url.split('&');
        for (i = 0; i < params.length; i++) {
            param = params[i].split('=');
            query[param[0]] = param[1];
        }
    }
    return query;
}


//获取地址参数
export const _getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};

//获取项目地址
export const _getProjectUrl = function () {
    var url = window.location.href;
    var param1 = url.toString().indexOf('?');
    var param2 = url.toString().indexOf('#');
    if (param1 != -1 || param2 != -1) {
        if (param1 != -1 && param2 != -1) {
            if (param1 > param2) {
                url = url.toString().substr(0, param2);
            } else {
                url = url.toString().substr(0, param1);
            }
        } else if (param1 != -1) {
            url = url.toString().substr(0, param1);
        } else {
            url = url.toString().substr(0, param2);
        }
        return url;
    } else {
        return url;
    }
};

//限制字符長度
export const substrLen = function (str, len) {
    return (str && str.length > len) ? str.substr(0, len ? len : str.length) + "..." : str
}

export const arrayLen = function (data, num) {
    var result = [];
    num = num ? num : 1
    for (var i = 0, len = data.length; i < len; i += num) {
        result.push(data.slice(i, i + num));
    }
    return result
}

//獲取當前的櫥櫃信息啊 
export const currentBoard = function (list, ids, key) {
    if (_.isEmpty(list)) return null
    key = key ? key : 'ids'
    const findlastIndex = _.findLastIndex(list, function (item) {
        return item[key] === ids
    })
    return findlastIndex !== -1 ? list[findlastIndex] : list[0]
}

export const currentList = function (list, ids, key) {
    if (_.isEmpty(list)) return null
    key = key ? key : 'id_class'
    const filterList = _.filter(list, function (item) {
        return item[key] === ids
    })
    return filterList
}

/*
    表单数据正则验证 ——
        参数 ——
            type： 
                name（姓名）、
                identification_card（身份证号）、
                card_no（银行卡号）、
                bank_name（开户银行名）、
                mobile（手机号）、
                card_no_input
            str： 需要验证的字符串
        返回 ——
            验证后的boolean
*/
export const verification = (type, str) => {
    let typeRegx = {
        name: /^[\u2E80-\uFE4F]{2,4}$/,
        identification_card: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
        card_no: /^(\d{12,19})$/,
        bank_name: /^[\u2E80-\uFE4F]{3,10}$/,
        mobile: /^([0-9]{8,11})?$/,
        card_no_input: /^\d+$/,
        code: /^(\d{1,12})$/
    };
    let regx = typeRegx[type];
    if (regx.test(str)) {
        return true;
    } else {
        return false;
    }
}

export const objectUrl = (str) => {
    var url = ''
    if (_.isObject(str)) {
        _.each(_.keys(str), function (key, index, array) {
            url += key + '=' + str[key] + (index < array.length - 1 ? '&' : '')
        })
        return url
    }
}

export const urlParam = (url, obj) => {
    var _url = url || '/';
    _url = _url + (obj ? '?' + objectUrl(obj) : '')
    return _url
}

export const devideArrayMiddle = (arr, len) => {
    if (_.isArray(arr) && arr.length > 1) {
        let _len = len ? len : 3
        let _arr = arr.slice(0, _len);
        let _itema = _arr[1];
        let _itemb = _arr[0];
        _arr.splice(0, 2, _itema, _itemb);
        return _arr
    } else {
        return arr
    }
}

export const MillisecondToDate = (t) => {
    var hour = (t / 60 / 60 > 24) ? Math.round(t / 60 / 60) : Math.floor(t / 60 / 60 % 24);
    var min = Math.floor(t / 60 % 60);
    var sec = Math.floor(t % 60);
    var day = Math.floor(t / 60 / 60 / 24);
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var countDownTime = hour + "時" + min + "分" + sec + "秒";
    return countDownTime
}

//獲取地址欄的參數
export const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
