<template>
  <div>
    <Header class='order-header'>
      <span slot='left'></span>
      <span slot='center'>订单</span>
      <span slot='right'></span>
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
.order-header {
  background-color: green;
}
</style>
