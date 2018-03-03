<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js on Heroku',
      date: _.toUpper('--foo-bar--'),
    }
  }
}
</script>

<template lang="pug">
span
  h1 hello world
  p {{ msg }}
  p {{ new Date() }}
  p {{ moment([2010, 1, 14, 15, 25, 50, 125]) }}
  el-button {{'test' | capitalize}}
  el-tag it works
</template>


<style lang="scss" scoped>
  $red: blue;

  h1 {
    color: $red;
  }
</style>
