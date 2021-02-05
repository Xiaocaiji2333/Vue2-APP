<template>
  <div>
    <Header class='register-header'>
      <span slot='left'></span>
      <span slot='center'>注册</span>
      <span slot='right'></span>
    </Header>
    <div class='register-contain'>
      <input type="text" placeholder="请输入手机号" maxlength="11" v-model='phone'/>
      <input v-if='!showPsw' type="password" placeholder="请输入密码"/>
      <input v-else type="text" placeholder="请输入密码"/>
      <div class='showPsw' @click='() => {showPsw = !showPsw}'></div>
      <input type="text" placeholder="请输入验证码"/>
      <button v-if='!timeDown' :disabled='!rightPsw' @click='getVerifyCode'>获取验证码</button>
      <button v-else disabled='true'>已发送({{timeDown}}s)</button>
      <div class='btn'>
        <button @click='login'>注册</button>
        <button @click='register'>已有帐号</button>
      </div>
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
  data () {
    return {
      phone: '',
      timeDown: 0,
      showPsw: false
    }
  },
  computed: {
    rightPsw () {
      // console.log(this.phone)
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    register () {
      this.$router.push('/login')
    },
    login () {
      this.$router.push('/login')
    },
    getVerifyCode () {
      if (this.phone) {
        this.timeDown = 30
        const interID = setInterval(() => {
          this.timeDown--
          if (this.timeDown === 0) {
            clearInterval(interID)
          }
        }, 1000)
      }
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
.register-contain>.btn {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 16px;
  /* text-align: center; */
}
input {
  margin-top: 5px;
}
.register-contain>.showPsw {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: blue;
  display: inline-block;
  position: relative;
  z-index: 1;
  left: -25px;
  top: 3px;
}
</style>
