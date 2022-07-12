<template>
  <div id="app">
    <div>
      messageBox演示
    </div>
    <button @click="() => handleClick(1000)">1s弹窗</button>
    <button @click="() => handleClick(3000)">3秒弹窗</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
    
  },
  methods: {
    handleClick(duration) {
      this.$message('插件调用', duration)
    }
  }
}
</script>

<style>
</style>
