<template>
  <div>
    <section>
      <input type="text" placeholder="请输入手机号"/>
      <button>获取验证码</button>
    </section>
    <input type="text" placeholder="请输入验证码"/>
  </div>
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style scoped>
input {
  margin: 3px;
}
</style>
