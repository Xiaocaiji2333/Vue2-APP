<template>
  <div>
    <Header>
      <span slot='left'>1</span>
      <span slot='center'>2</span>
      <span slot='right'>3</span>
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
  .profile-contain {
    margin-top: 46px;
  }
</style>
