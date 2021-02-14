<template>
  <div class="container header">
    <div>
      <h1>Dashboard</h1>
    </div>
    <div class="account">
      <p v-if="user">{{ user }}</p>
      <p v-else>Logged out</p>
      <div v-if="user">
        <a href="#" class="btn primary" @click.prevent="logOut()">Log out</a>
      </div>
      <div v-else>
        <nuxt-link v-if="!user" to="/login" prefetch>
          Login
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return (this.$store.state.auth || {}).username || null
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/reset').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>
.header {
  width: 100vw;
  flex-direction: row;
  min-height: 4rem;
  justify-content: space-between;
  align-items: center;
  background-color: steelblue;
  color: white;
  padding: 2rem 14rem;
}

</style>
