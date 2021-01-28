<template>
  <div id="app">
    <router-view/>
    <Footer>
      <FooterItem v-for="(item,index) in footerNav" :key='index' :pathTo='(item.path)'>
        <i slot='icon' :class='"iconfont "+(item.icon)'></i>
        <span slot='text'>{{item.text}}</span>
      </FooterItem>
    </Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import FooterItem from './components/FooterItem'

export default {
  name: 'App',
  components: {
    Footer,
    FooterItem
  },
  data () {
    return {
      footerNav: [
        {
          icon: 'icon-dibudaohang-shouye',
          text: '外卖',
          path: '/msite'
        },
        {
          icon: 'icon-sousu',
          text: '搜索',
          path: '/search'
        },
        {
          icon: 'icon-dibudaohang-dingdan',
          text: '订单',
          path: '/order'
        },
        {
          icon: 'icon-dibudaohang-wode',
          text: '我的',
          path: '/profile'
        }
      ]
    }
  },
  computed: {
    judgeHeader () {
      return true
    }
  }
}
</script>

<style scoped>
@import './assets/icon/font_icon/iconfont.css';
#app {
  width: 100%;
  height: calc(100% - 92px);
  padding: 46px 0;
}
</style>
