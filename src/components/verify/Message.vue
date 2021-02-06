<template>
  <div ref='captcha'>
    <section>
      <input type="text" placeholder="请输入手机号" maxlength="11" v-model='phone'/>
        <button v-if='!timeDown' :disabled='!rightPsw' @click='getVerifyCode'>获取验证码</button>
        <button v-else disabled='true'>已发送({{timeDown}}s)</button>
    </section>
    <input type="text" placeholder="请输入验证码" v-model='captcha'/>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      phone: '',
      captcha: '',
      timeDown: 0
    }
  },
  computed: {
    rightPsw () {
      // console.log(this.phone)
      return /^1\d{10}$/.test(this.phone)
    }
  },
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
    }
  }
}
</script>

<style scoped>
input {
  margin: 3px;
}
</style>
