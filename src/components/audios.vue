<template>
  <div class="container-audio" :class="[!playAudio ? 'roateLoop' : '']" @click="audioMange">
      <!-- audio.wxml -->
    <audio :src="backgroundAudio || src" id="myAudio" loop ></audio>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      playAudio: 0
    };
  },
  created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  },
  props: ["src"],
  computed: {
    homeInfo() {
      return store.getters.homeInfo;
    },
    backgroundAudio() {
      return this.homeInfo.backgroundAudio;
    }
  },
  methods: {
    audioMange: function() {
      if (this.playAudio == 0) {
        this.audioPause();
      } else {
        this.audioPlay();
      }
    },
    audioPlay() {
      this.audioCtx.play();
      this.playAudio = 0;
    },
    audioPause: function() {
      this.audioCtx.pause();
      this.playAudio = 1;
    },
    audio14: function() {
      this.audioCtx.seek(14);
    },
    audioStart: function() {
      this.audioCtx.seek(0);
    }
  },
  mounted() {
    this.audioCtx = wx.createAudioContext("myAudio");
    const vm = this
    setTimeout(() => {
      vm.audioCtx.play();
    }, 300);
  }
};
</script>

<style lang="less">
@import url("~assets/less/_mixins.less");
.container-audio {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: url("@{img-url}music.png") no-repeat;
  background-size: 100% 100%;
}
</style>
