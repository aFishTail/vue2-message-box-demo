<template>
  <transition name="fade">
    <div class="message-box" v-if="showState" :style="style">
      {{msg}}
    </div>
  </transition>
</template>

<script>
export default {
  // 说明：在实际开发中下面两种方式只能写其中一种
  // 第一种方式：通过接收父组件传来的参数改变数据状态
  name: 'messageBox',
  // props: {
  //   msg: {
  //     default: () => '这是一段信息',
  //     type: String
  //   },
  //   showState: {
  //     default: () => false,
  //     type: Boolean
  //   }
  // },
  computed: {
    style() {
      return {
        top: `${100 + this.index*80}px`
      }
    }
  },
  data () {
    // 第二种方式：通过方法调用改变该组件实例的数据状态
    return {
      msg: '这是一段信息',
      showState: false,
      index: 0
    }
  },
  mounted() {
    console.log(this.index, this.style)
  }
}
</script>

<style lang="css" scoped>
  .message-box{
    position: fixed;
    top: 100;
    left: 50%;
    transform:translate(-50%,-50%);
    height: 60px;
    width: 400px;
    line-height: 60px;
    border-radius: 5px;
    text-align: center;
    background-color: lightgreen;
    font-size: 14px;
    z-index: 999;
  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s ease;
  }
  .fade-enter,
  .fade-leave-to{
    top: 0;
    opacity: 0;
  }
</style>
