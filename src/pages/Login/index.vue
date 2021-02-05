<template>
  <div class='login'>
    <Header class='login-header'>
      <span slot='left'></span>
      <span slot='center'>登录</span>
      <span slot='right'></span>
    </Header>
    <div class='login-contain'>
      <span @click='toMsg'>短信验证</span>
      <span @click='toPsw'>密码验证</span>
      <router-view></router-view>
      <div class='btn'>
        <button @click='login'>登录</button>
        <button @click='register'>注册</button>
      </div>
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
    toMsg () {
      this.$router.replace('/login/msg')
    },
    toPsw () {
      this.$router.replace('/login/psw')
    },
    login () {
      this.$router.push('/msite')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.login-header {
  background-color: green;
}
.login-contain {
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
span {
  margin: 3px;
}
.login-contain>.btn {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 16px;
  /* text-align: center; */
}
</style>
