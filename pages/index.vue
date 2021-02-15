<template>
  <div class="container">
    <Dashboard :key="componentKey" :readings="data" @clicked="newChart"></Dashboard>
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
  data () {
    return {
      data: [],
      componentKey: 0
    }
  },
  mounted () {
    this.newChart(new Date().toISOString().split('T')[0])
  },
  methods: {
    newChart (value) {
      axios.get(process.env.baseUrl + '/reading/' + this.$store.state.auth.clientId + '?d=' + value, {
        headers: {
          authorization: 'JWT ' + getToken()
        }
      }).then((result) => {
        this.data = result.data
        this.componentKey += 1
      }).catch(() => {})
    }
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
