<template>
  <div>
    <Header class='search-header'>
      <span slot='left'></span>
      <input type='text' placeholder='请输入关键字' slot='center'/>
      <span slot='right' class='iconfont icon-sousu'></span>
    </Header>
    <div class='search-contain'>
      Search
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'Search',
  components: {
    Header
  }
}
</script>

<style scoped>
@import '../../assets/icon/font_icon/iconfont.css';

.search-header {
  background-color: #ccc;
}
.search-header input {
  width: 100%;
  height: 50%;
}
</style>
