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
      <router-view
        :phone='phone'
        :psw='psw'
        :captcha='captcha'
        :rightPsw='rightPsw'
        @changePhone='changePhone'
        @changePsw='changePsw'
        @changeCaptcha='changeCaptcha'/>
      <div class='btn'>
        <button @click='login'>登录</button>
        <button @click='register'>注册</button>
      </div>
    </div>
    <AlertTip :alertText='alertText' @closeTip='closeTip' v-show='showAlert'/>
  </div>
</template>

<script>
import Header from '../../components/Header'
import AlertTip from '../../components/AlertTip'

export default {
  name: 'Login',
  components: {
    Header,
    AlertTip
  },
  data () {
    return {
      phone: '',
      psw: '',
      captcha: '',
      alertText: '',
      showAlert: false
    }
  },
  computed: {
    rightPsw () {
      console.log(this.phone)
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    toMsg () {
      this.$router.push('/login/msg')
    },
    toPsw () {
      this.$router.push('/login/psw')
    },
    login () {
      // console.log(this.$children[1].$refs)
      if (this.$children[1].$refs.message) { // 短信验证
        if (!this.rightPsw) {
          this.alertText = '手机号错误！'
          this.showAlert = true
        }
      } else { // 密码验证
      }
      // this.$router.push('/msite')
    },
    register () {
      this.$router.push('/register')
    },
    changePhone (val) {
      this.phone = val
    },
    changePsw (val) {
      this.psw = val
    },
    changeCaptcha (val) {
      this.captcha = val
    },
    closeTip () {
      this.showAlert = false
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
