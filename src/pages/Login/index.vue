<template>
  <div>
    <Header class='login-header'>
      <span slot='left'></span>
      <span slot='center'>登录</span>
      <span slot='right'></span>
    </Header>
    <div>
      <button @click='login'>登录</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'Login',
  components: {
    Header
  },
  methods: {
    login () {
      this.$router.push('/msite')
    }
  }
}
</script>

<style scoped>
.login-header {
  background-color: green;
}
</style>
