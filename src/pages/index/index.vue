<template>
  <div class="container fadeIn animated">

    <div class="userpic">
      <scroll-view>
        <div class="cover-litst" v-for="(item,index) in clist" :key="index" @click="clickPic(item)">
            <div class="item-media">
              <img :src="item.img+'?x-oss-process=style/_800'" alt="" mode="scaleToFill">
            </div>
            <div class="item-title">
              <div class="title-text">{{item.name}}</div>
              <div class="title-cover"></div>
            </div>
        </div>
      </scroll-view>
     </div>

    <div class="user-cover" :animation="animationData" v-if="!storage.openBackgroundCover" @click="clickCover(1)">
      <div class="userinfo" >
        <div class="userinfo-media">
          <img class="userinfo-avatar bounce animated" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        </div>
        <div class="userinfo-nickname fadeIn animated">
          <card :text="userInfo.nickName"></card>
        </div>
      </div>
    </div>

    <div class="user-video">
      <a href="/pages/video/video" class="video" @click="clickVideo">去往视频剪辑</a>
    </div>

    <!-- <audios> </audios> -->
     <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->
    <!-- <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/counter" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from "@/components/card";
import store from "@/store";
import { BackgroundAudioPlay } from "@/api/util";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {
        avatarUrl: "",
        nickName: "xx"
      },
      animationData:{}
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../logs/logs";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickPic(item) {
      const obj = {};
      const path = [];
      if (_.has(item, "urls") && item.urls) {
        obj.urls = item.urls;
        obj.current = obj.urls[0];
        wx.previewImage(obj);
      }
    },
    clickCover(val){
      clearTimeout(this.setTIMES);
      this.hide(val);
    },
    hide(val,clear){
      let _val = val
      if(clear) return  store.dispatch('setStorageSync',{key:'openBackgroundCover',obj:_val})
      this.setTIMES =  setTimeout(() => {
        store.dispatch('setStorageSync',{key:'openBackgroundCover',obj:_val})
      }, 2000);
    },
    onShow: function(){
      const vm = this
      var animation = wx.createAnimation({
        duration: 1000,
          timingFunction: 'ease',
      })

      this.animation = animation

      animation.scale(1.2,1.2).rotate(45).step()
      this.animationData = animation.export()

      setTimeout(function() {
        animation.translate(30).scale(1.1,1.1).opacity(0.5).step()
        animation.translate(3000, 0).opacity(0).step({ duration: 2000 })
        vm.animationData = animation.export()
        setTimeout(() => {
          vm.hide(1,1)
        }, 2500);
      }.bind(vm), 3000);
    },
    clickVideo(){
      const url = 'http://my-wife-1252712744.cosgz.myqcloud.com/video/cyqzl.mp4';
      store.dispatch('getInitTird',{backgroundVideo:url})
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
  computed: {
    homeInfo() {
      return store.getters.homeInfo;
    },
    clist() {
      return this.homeInfo.clist;
    },
    storage(){
      return store.getters.storage
    }
  },
  mounted() {
    wx.setNavigationBarTitle({
      title: "ChenYanQin & ZhangLi"
    });
    BackgroundAudioPlay();
    this.onShow();
    this.hide(0,1)
  }
};
</script>

<style scoped lang="less">
@import url("~assets/less/_mixins.less");
.user-cover {
  position: fixed;
  z-index: 99;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.userinfo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .flexbox();
  .align-items(center);
  .justify-content(center);
  .flex-direction(column);
  height: 40px;
  width: 300px;
  margin: auto;
  text-align: center;
  .userinfo-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #eee;
    margin: 10px 0 10px 10px;
  }
  .userinfo-nickname {
    color: #aaa;
    font-size: 14px;
  }
}
.userpic {
  .cover-litst {
    position: relative;
    .item-media {
      height: 220px;
      margin-bottom: 12px;
      background: #eee;
      overflow: hidden;
       .transition(.3s);
       &:hover{
        opacity: .8;
        img{
          .transform(scale(1.1));
        }
      }
      // box-shadow: 3px 3px 3px rgba(184, 184, 184, 0.5);
      img {
        .transition(.3s);
        height: 220px;
        width: 360px;
      }
    }
    .item-title {
      position: absolute;
      bottom: 0;
      left: 0;
      .title-text {
        color: #fff;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        .textoverflow();
        margin-left: 12px;
        z-index: 2;
        position: absolute;
        bottom: 0;
      }
      .title-cover {
        opacity: 0.3;
        position: absolute;
        background-color: #000;
        height: 40px;
        width: 360px;
        bottom: 0;
      }
    }
  }
}
.user-video{
  padding-bottom: 5px;
  .video{
    .transition(.3s);
    padding: 12px 20px;
    background: rgb(21, 172, 21);
    color: #fff;
    border-radius: 3px;
    font-size: 14px;
    width: 315px;
    text-align: center;
    &:hover{
      background: rgb(21, 172, 21,.8);
    }
  }
}
</style>
