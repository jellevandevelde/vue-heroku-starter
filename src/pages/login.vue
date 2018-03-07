<script>
import LoginForm from '@/components/organisms/login-form';
import firebase from 'firebase';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  data () {
    return {
      showError: false,
      loading: false,
      loginForm: {
        email: '',
        password: ''
      },
    };
  },
  methods: {
    login(e){
      this.loading=true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
        .then(
          user => {
            this.$router.push('/');
          },
          err => {
            this.$message.error('Oops, this is a error message.');
          }
      );
      e.preventDefault();
    },
  },
};
</script>

<template lang="pug">
  span
    el-main.login-form
      el-row
        el-col(:span="6", :offset="9")
          el-card(v-loading="loading", class="box-card")
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
