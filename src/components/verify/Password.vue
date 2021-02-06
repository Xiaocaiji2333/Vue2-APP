<template>
  <div class='password-contain'>
    <input type="text" placeholder="请输入手机号" maxlength="11" v-model='phone'/>
    <input v-if='!showPsw' type="password" placeholder="请输入密码" v-model='psw'/>
    <input v-else type="text" placeholder="请输入密码" v-model='psw'/>
    <div class='showPsw' @click='() => {showPsw = !showPsw}'></div>
  </div>
</template>

<script>
export default {
  name: 'Password',
  data () {
    return {
      phone: '',
      psw: '',
      showPsw: false
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
