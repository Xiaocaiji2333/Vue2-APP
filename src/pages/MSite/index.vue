<template>
  <div class="msite">
    <Header>
      <span slot='left'>1</span>
      <span slot='center'>2</span>
      <span slot='right'>3</span>
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
  }
}
</script>

<style scoped>
  .msite {
    /* height: calc(100% - 46 - 45); */
  }
  .msite-contain {
    /* margin-top: 46px; */
  }
</style>
