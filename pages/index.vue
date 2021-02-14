<template>
  <div class="container">
    <Dashboard :readings="data"></Dashboard>
  </div>
</template>

<script>
import axios from 'axios'
import Dashboard from './dashboard'

export default {
  components: {
    Dashboard
  },
  async asyncData ({ params, error, store, req }) {
    console.log(store)
    try {
      console.log(store.state.auth.clientId)
      const { data } = await axios.get(process.env.baseUrl + '/reading/' + store.state.auth.clientId, {
        // headers: {
        //   Authorization: getToken(req)
        // }
      })
      console.log(data)
      return { data }
    } catch (e) {
      console.log('catch error:', e)
      // error({ statusCode: 404, message: e.message })
      return { data: [] }
    }
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
