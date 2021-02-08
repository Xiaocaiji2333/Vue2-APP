<template>
  <div ref='message'>
    <section>
      <input type="text" ref='phone' placeholder="请输入手机号" maxlength="11" @keyup='changePhone'/>
      <button v-if='!timeDown' :disabled='!rightPsw' @click='getVerifyCode'>获取验证码</button>
      <button v-else disabled='true'>已发送({{timeDown}}s)</button>
    </section>
    <input type="text" ref='captcha' placeholder="请输入验证码" @keyup='changeCaptcha'/>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: [
    'phone',
    'captcha',
    'rightPsw'
  ],
  data () {
    return {
      timeDown: 0
    }
  },
  // computed: {
  //   rightPsw () {
  //     // console.log(this.phone)
  //     return /^1\d{10}$/.test(this.phone)
  //   }
  // },
  methods: {
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
    },
    changePhone () {
      // console.log(this.phone)
      this.$emit('changePhone', this.$refs.phone.value)
    },
    changeCaptcha () {
      // console.log(this.captcha)
      this.$emit('changeCaptcha', this.$refs.captcha.value)
    }
  }
}
</script>

<style scoped>
input {
  margin: 3px;
}
</style>
