<template>
  <div class="container fadeIn animated">
      <div class="video-container section tc">
        <video id="myVideo" :src="initTird.backgroundVideo"  :danmu-list="danmuList" page-gesture="true" @timeupdate="bindtimeupdate"  enable-danmu danmu-btn controls></video>
        <div class="btn-area">
          <input @blur="bindInputBlur" class="btn-input" placeholder="请输入弹幕" />
          <button @click="bindSendDanmu" class="btn-send">发送弹幕</button>
        </div>
      </div>
  </div>
</template>

<script>
import card from "@/components/card";
import store from "@/store";
import { delayBounceAction } from "@/api/filters";
export default {
  data() {
    return {
      startTime: _.now(),
      time: 0,
      inputValue: "",
      danmuList: [
        {
          text: "厉害了我的哥 ",
          color: "#ff0000",
          time: 1
        },
        {
          text: "666",
          color: "#ff00ff",
          time: 3
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindInputBlur: function(e) {
      console.log(e);
      this.inputValue = e.mp.detail.value;
    },
    bindtimeupdate(event) {
      const detail = event.mp.detail;
      this.time = Math.ceil(detail.currentTime)+1;
    },
    bindSendDanmu() {
      const vm = this;
      if (this.inputValue) {
        this.videoContext.sendDanmu({
          text: this.inputValue || "666",
          color: this.getRandomColor(),
          time: vm.time
        });
        // vm.danmuList = [];
        vm.danmuList.push({
          text: vm.inputValue || "666",
          color: vm.getRandomColor(),
          time: vm.time
        });
      }
    },
    getRandomColor() {
      let rgb = [];
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length == 1 ? "0" + color : color;
        rgb.push(color);
      }
      return "#" + rgb.join("");
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    this.videoContext = wx.createVideoContext("myVideo");
  },
  computed: {
    initTird() {
      return store.getters.initTird;
    }
  },
  mounted() {
    wx.setNavigationBarTitle({
      title: "Miss Chen"
    });
    setTimeout(
      function() {
        this.videoContext.play();
      }.bind(this),
      500
    );
  }
};
</script>

<style scoped lang="less">
@import url("~assets/less/_mixins.less");
.video-container{
  #myVideo{
    width: 360px;
  }
  .btn-area{
    .flexbox();
    .align-items(center);
    .btn-input{
      border:1rpx solid rgb(21, 172, 21);
      border-radius: 3px;
      padding: 5px 12px;
    }
  }
  
}
</style>
