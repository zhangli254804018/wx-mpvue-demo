﻿// import _ from 'lodash'
import { format_time , getQueryString  } from './filters.js'
import Vue from 'vue'

export const TransferString = (content) => {
    var string = content;
    try {
        string = string.replace(/\r\n/ig, "<br>")
        string = string.replace(/\n/ig, "<br>");
        string = string.replace(/\\n/ig, "<br>");
    } catch (e) {
        // alert(e.message);  
    }
    return string;
}

export const facebook = () => {
    var parames = this.params;
    window.fbAsyncInit = function() {
        FB.init({
            appId: 1382678158693829,
            xfbml: true,
            version: 'v2.3'
        });
    };
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/zh_TW/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

export const sharefacebook = (callback, url, picture) => {
    var vm = this;
    var conf = window.serverConfig;
    var href = url || 'http://rcshow.tv/appNew/activity/thanksGiving/index.php?from=share';
    var redirect_uri = href + '&callback';
    if (conf.token) {
        redirect_uri = href + '&callback&type=' + conf.type + '&kind=' + conf.kind + '&uid=' + conf.uid + '&singerUid=' + conf.suid + '&token=' + conf.token + '&nstat=' + conf.nstat;
    }
    var link = 'http://rcshow.tv/appNew/share/fb.php?href=' + encodeURIComponent(href) + '&redirect_uri=' + encodeURIComponent(redirect_uri);
    FB.ui({
        method: 'share',
        href: href,
        layout: 'box_count',
        mobile_iframe: true,
        picture: picture || '',
        // description: description,
        // title: title
    }, function(response) {
        if (response !== undefined) {
            rca('app', 'thanksGiving', 'share', '年度感恩，愛您一起（2017）走下去', link, function() {
                alert('分享成功');
                callback && callback()
            });
        } else {
            alert('分享失敗');
        }
    })
    return false;
}

export const rca = (category, cvar, value, label, link, callback) => {
    var argsObj = {
        utc: category,
        utv: cvar,
        utt: value,
        utl: label || '',
        dl: link || '',
        vendor: getQueryString('vendor')
    };
    argsObj.z = new Date().getTime();

    var argsArr = [];
    for (var key in argsObj) {
        argsArr.push(key + '=' + encodeURIComponent(argsObj[key]));
    }

    var url = 'https://rcshow.tv/data_img.php?' + argsArr.join('&');

    var img = new Image();
    img.onload = img.onerror = function () {
        if (typeof callback == 'function') {
            callback();
        }
    };
    img.src = url;
}

export const alertDialogCommpent = (dialogcompont,data) => {
    var dialogComponts = new Vue(dialogcompont)
    dialogComponts.dialogData = data
    var component = dialogComponts.$mount()
    document.getElementById('pageDialog').appendChild(component.$el)
}


export const BackgroundAudioPlay = (src, title, epname, singer, coverImgUrl )=>{
    setTimeout(() => {
        const backgroundAudioManager = wx.getBackgroundAudioManager();
        backgroundAudioManager.title = title || "A Little Love";
        backgroundAudioManager.epname = epname || "A Little Love";
        backgroundAudioManager.singer = singer ||  "冯曦妤";
        backgroundAudioManager.coverImgUrl = coverImgUrl ||
            "https://y.gtimg.cn/music/photo_new/T002R300x300M000003JtFWs496kCE.jpg?max_age=2592000";
        backgroundAudioManager.src = src ||
            "http://my-wife-1252712744.cosgz.myqcloud.com/video/%E5%86%AF%E6%9B%A6%E5%A6%A4%20-%20A%20Little%20Love.mp3"; // 设置了 src 之后会自动播放
    }, 300);
}
