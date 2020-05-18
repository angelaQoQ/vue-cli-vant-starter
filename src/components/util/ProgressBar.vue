<template>
  <div class="progress-wrapper" :style="wrapStyle">
    <div
      class="progress"
      @touchstart.stop="mousedownHandler"
      @touchmove.stop="mousemoveHandler"
      @touchend.stop="mouseupHandler"
      :style="pBarStyle"
    >
      <!-- TODO -->
      <div class="left" :style="leftStyle">
        <div class="ball" :style="ballStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    leftBg: String,
    bgc: String,
    ballBgc: String,
    height: String,
    width: String,
    percent: {
      type: Number,
      default: 10
    }
  },
  data: function() {
    return {
      wrapStyle: {
        width: this.width
      },
      pBarStyle: {
        backgroundColor: this.bgc,
        height: this.height
      },
      leftStyle: {
        width: this.percent + "%",
        background: this.leftBg,
        height: this.height
      },
      ballStyle: {
        backgroundColor: this.ballBgc,
        height: this.height * 5,
        width: this.height * 5,
        borderRadius: "50%",
        right: -parseInt(this.height) * 2.5 + "px",
        top: -parseInt(this.height) * 2.5 + "px"
      },
      // 标记是否按下鼠标
      isMouseDownOnBall: false,
      // 鼠标进body时是否是mousedown
      isMouseDownOnBody: false,
      // 鼠标离开进度条时的clientX
      outProgressClientX: 0,
      // 主要用于防止一个页面内有多个本组件，MouseMove时互相影响而设置的字段
      isCurrentProgress: false
    };
  },
  computed: {
    progressElement() {
      return this.$el.getElementsByClassName("progress")[0];
    }
  },
  methods: {
    mousedownHandler(e) {
      this.isMouseDownOnBall = true;
      this.isCurrentProgress = true;
    },
    mousemoveHandler(e) {
      if (this.isMouseDownOnBall && this.isCurrentProgress) {
        let decimal =
          (e.touches[0].clientX - this.$el.offsetLeft) /
          this.progressElement.clientWidth;
        let percent = decimal * 100;
        if (percent >= 100) {
          percent = 100;
        } else if (percent <= 0) {
          percent = 0;
        }
        this.leftStyle.width = percent + "%";
        this.$emit("pbar-drag", percent);
      }
    },
    mouseupHandler(e) {
      if (this.isMouseDownOnBall && this.isCurrentProgress) {
        let percent = this.leftStyle.width.slice(0, -1) - 0;
        if (percent >= 100) {
          percent = 100;
        } else if (percent <= 0) {
          percent = 0;
        }
        this.leftStyle.width = percent + "%";
        this.$emit("pbar-seek", percent);

        this.isMouseDownOnBall = false;
        this.isCurrentProgress = false;
      }
    },
  },
  watch: {
    percent(cur, old) {
      this.leftStyle.width = cur + "%";
    }
  }
};
</script>

<style scoped>
.progress-wrapper {
  /*width:100%;*/
}
.progress {
  width: 100%;
  /* height: 20px; */
  background-color: #ccc;
  /* overflow: hidden; */
  cursor: pointer;
}
.left {
  height: 100%;
  width: 30%;
  background-color: greenyellow;
  position: relative;
}
.ball {
  height: 24px;
  width: 24px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: -12px;
  z-index: 3;
}
</style>
