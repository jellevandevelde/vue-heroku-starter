<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js on Heroku',
    }
  }
}
</script>

<template lang="pug">
span
  h1 hello world
  p {{ msg }}
  el-button test
  el-tag it works
</template>


<style lang="scss" scoped>
  $red: blue;

  h1 {
    color: $red;
  }
</style>
