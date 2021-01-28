<template>
  <div class='footer'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 6px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
