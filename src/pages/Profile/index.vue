<template>
  <div>
    <Header class='profile-header'>
      <span slot='left'></span>
      <span slot='center'>我的</span>
      <span slot='right'></span>
    </Header>
    <div class='profile-contain'>
      Profile
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'Profile',
  components: {
    Header
  }
}
</script>

<style scoped>
.profile-header {
  background-color: green;
}
</style>
