<template>
  <div>
    <Header class='register-header'>
      <span slot='left'></span>
      <span slot='center'>注册</span>
      <span slot='right'></span>
    </Header>
    <div>
      <button @click='register'>登录</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'Register',
  components: {
    Header
  },
  methods: {
    register () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.register-header {
  background-color: green;
}
</style>
