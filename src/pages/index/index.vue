<template>
  <div class="container fadeIn animated" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar bounce animated" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="userpic">
      <scroll-view>
        <div class="cover-litst" v-for="(item,index) in clist" :key="index">
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
import card from '@/components/card'
import store from '@/store'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {
        avatarUrl:'http://my-wife-1252712744.cosgz.myqcloud.com/12/l-2.jpg',
        nickName:'xx'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  computed:{
    homeInfo(){
      return store.getters.homeInfo
    },
    clist(){
      return this.homeInfo.clist
    }
  }
}
</script>

<style scoped lang="less">
@import url('~assets/less/_mixins.less');
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
  height: 80px;
}

.userinfo-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eee;
}

.userinfo-nickname {
  color: #aaa;
  font-size: 14px;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.userpic{
  .cover-litst{
    position: relative;
    .item-media{
      height: 200px;
      margin-bottom: 5px;
      background: #eee;
       img{
        height: 200px;
        width: 320px;
      }
    }
    .item-title{
      position: absolute;
      bottom: 0;
      left: 0;
      .title-text{
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
      .title-cover{
        opacity: .3;
        position: absolute;
        background-color: #000;
        height: 40px;
        width: 320px;
        bottom:0;
      }
    }
  }
}


</style>
