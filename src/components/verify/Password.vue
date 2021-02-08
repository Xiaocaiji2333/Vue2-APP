<template>
  <div class='password-contain'>
    <input type="text" ref='phone' placeholder="请输入手机号" maxlength="11" @keyup='changePhone'/>
    <input v-if='!showPsw' type="password" ref='psw' placeholder="请输入密码" @keyup='changePsw'/>
    <input v-else type="text" ref='psw' placeholder="请输入密码" @keyup='changePsw'/>
    <div class='showPsw' @click='() => {showPsw = !showPsw}'></div>
  </div>
</template>

<script>
export default {
  name: 'Password',
  props: [
    'phone',
    'psw'
  ],
  data () {
    return {
      showPsw: false
    }
  },
  methods: {
    changePhone () {
      this.$emit('changePhone', this.$refs.phone.value)
    },
    changePsw () {
      this.$emit('changePsw', this.$refs.psw.value)
    }
  }
}
</script>

<style scoped>
.password-contain>input {
  margin: 3px;
}
.password-contain>.showPsw {
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
