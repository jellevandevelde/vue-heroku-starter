<script>
import VueComponent from '@/components/vue-component'

export default {
  name: 'Homepage',
  components: {
    VueComponent,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js on Heroku',
    }
  }
}
</script>

<template lang="pug">
span
  h1 {{msg}}
  vue-component
</template>


<style lang="scss" scoped>

</style>
