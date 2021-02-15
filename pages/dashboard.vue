<template>
  <div class="container dashboard">
    <Header></Header>
    <Graph :readings="readings" @clicked="newChart"></Graph>
  </div>
</template>

<script>
import Header from '../components/header'
import Graph from '../components/graph'

export default {
  components: {
    Header,
    Graph
  },
  props: {
    readings: {
      type: Array,
      default: null
    }
  },
  methods: {
    newChart (value) {
      this.$emit('clicked', value)
    }
  }
}
</script>

<style>
.dashboard {
  width: 100vw;
  flex-direction: column;
}
</style>
