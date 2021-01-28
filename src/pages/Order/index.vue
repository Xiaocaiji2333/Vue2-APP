<template>
  <div>
    <Header>
      <span slot='left'>1</span>
      <span slot='center'>2</span>
      <span slot='right'>3</span>
    </Header>
    <div class='order-contain'>
      Order
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'Order',
  components: {
    Header
  }
}
</script>

<style scoped>
  .order-contain {
    margin-top: 46px;
  }
</style>
