<template>
  <div class='header'>
    <div class='left'><slot name='left'></slot></div>
    <div class='center'><slot name='center'></slot></div>
    <div class='right'><slot name='right' class='right'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: green;
    display: flex;
    justify-content: space-between;
  }
  .left, .right {
    width: 46px;
    text-align: center;
    line-height: 46px;
  }
  .center {
    flex: 1;
    text-align: center;
    line-height: 46px;
  }
</style>
