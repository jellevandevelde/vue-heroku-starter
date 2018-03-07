<script>
import firebase from 'firebase'

export default {
  name: 'VueComponent',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    logOut() {
      console.log('log out');
      firebase.auth().signOut().then(() => {
        this.$router.push('/login');
      })
    },
  },
  computed: {
  },
}
</script>

<template lang="pug">
  el-button(type="primary" @click="logOut") Log out
</template>

<style lang="scss" scoped>
</style>
