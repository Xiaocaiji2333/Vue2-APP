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
  display: flex;
  justify-content: space-between;
  line-height: 46px;
  color: #fff;
  text-align: center;
  }
.left, .right {
  width: auto;
  padding: 0 8px;
}
.center {
  flex: 1;
}
</style>
