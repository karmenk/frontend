<template>
  <div class="container">
    <Dashboard :readings="data"></Dashboard>
  </div>
</template>

<script>
import axios from 'axios'
import Dashboard from './dashboard'
import { getToken } from '~/utils/auth'

export default {
  components: {
    Dashboard
  },
  async asyncData ({ params, error, store, req }) {
    try {
      const { data } = await axios.get(process.env.baseUrl + '/reading/' + store.state.auth.clientId + '?d=' + new Date().toISOString().split('T')[0], {
        headers: {
          authorization: 'JWT ' + getToken()
        }
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
