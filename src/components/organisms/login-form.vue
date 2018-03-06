<script>
export default {
  name: 'LoginForm',
  components: {
  },
  data () {
    return {
    };
  },
  props: {
    form: {
      type: Object,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
}
</script>

<template lang="pug">
    el-form(ref="form" :model="form")
      el-form-item(label="Email")
        el-input(v-model="form.email")
      el-form-item(label="Password")
        el-input(v-model="form.password", type="password")
      el-form-item
        el-button.float-right(type="primary", @click="onSubmit") Sign in
</template>

<style lang="scss" scoped>
</style>
