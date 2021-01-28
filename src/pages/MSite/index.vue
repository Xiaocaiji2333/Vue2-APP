<template>
  <div>
    <Header class='msite-header'>
      <i slot='left' class='iconfont icon-sousu' @click='toSearch'></i>
      <span slot='center'>首页</span>
      <div slot='right' class='msite-right'>
        <a href="#/login">登录</a>
        &nbsp;|&nbsp;
        <a href="#/register">注册</a>
      </div>
    </Header>
    <div class='msite-contain'>
      MSite
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'MSite',
  components: {
    Header
  },
  methods: {
    toSearch () {
      this.$router.push('/search')
    },
    toLogin () {
      this.$router.push('/login')
    },
    toRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
@import '../../assets/icon/font_icon/iconfont.css';

.msite-header {
  background-color: green;
}
.msite-right>a {
  color: #fff;
}
</style>
