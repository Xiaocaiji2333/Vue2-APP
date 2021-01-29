<template>
  <div>
    <Header class='register-header'>
      <span slot='left'></span>
      <span slot='center'>注册</span>
      <span slot='right'></span>
    </Header>
    <div class='register-contain'>
      <section>
        <input type="text" placeholder="请输入手机号"/>
        <button>获取验证码</button>
      </section>
      <input type="text" placeholder="请输入密码"/>
      <input type="text" placeholder="请输入验证码"/>
      <button @click='register'>注册</button>
      <button @click='login'>已有账号</button>
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
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.register-header {
  background-color: green;
}
.register-contain {
  position: absolute;
  width: 80%;
  height: 30%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 5px;
}
</style>
