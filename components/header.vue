<template>
  <div class="container header">
    <div>
      <h1>Dashboard</h1>
    </div>
    <div class="account">
      <p v-if="user">
        Welcome, {{ user }}
      </p>

      <div v-if="user" class="account-button">
        <a href="#" class="btn primary" @click.prevent="logOut()">Log out</a>
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
  flex-direction: row;
  min-height: 4rem;
  justify-content: space-between;
  align-items: center;
  background-color: steelblue;
  color: white;
  padding: 2rem 14rem;
}

.account {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.account-button {
  margin: 1rem;
  background-color: #18567d;
  padding: 0.6rem 1rem;
}

.account-button a {
  text-decoration: none;
  color: white;
}

</style>
