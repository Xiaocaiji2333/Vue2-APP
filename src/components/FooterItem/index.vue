<template>
  <router-link :class='"icon_item "+(isActive? "active" : null)' :to='pathTo'>
    <slot name='icon'></slot>
    <slot name='text'></slot>
  </router-link>
</template>

<script>
export default {
  name: 'FooterItem',
  props: {
    pathTo: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.pathTo === this.$route.path
    }
  }
}
</script>

<style scoped>
  .icon_item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .active {
    color: green;
  }
</style>
