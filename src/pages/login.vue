<script>
import LoginForm from '@/components/organisms/login-form'
import firebase from 'firebase'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  data () {
    return {
      showError: false,
      loginForm: {
        email: '',
        password: ''
      },
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
      .then(
        user => {alert('you are in')},
        err => {this.$message.error('Could not log in.')}
      )
    }
  }
}
</script>

<template lang="pug">
  el-main.login-form
    el-row
      el-col(:span="6", :offset="9")
        el-card(class="box-card")
          h2(slot="header") Log in
          login-form(:form="loginForm", :onSubmit="login")
</template>

<style lang="scss" scoped>
@import '../assets/styles/app.scss';

.login-form {
  height: 100vh;
  background: $dark-bg;
}
</style>
