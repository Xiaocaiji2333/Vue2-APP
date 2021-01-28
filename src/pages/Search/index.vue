<template>
  <div>
    <Header>
      <span slot='left'>1</span>
      <span slot='center'>2</span>
      <span slot='right'>3</span>
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
  .search-contain {
    margin-top: 46px;
  }
</style>
