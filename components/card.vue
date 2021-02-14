<template>
  <div class="container card">
    <div>
      <p>Day total: {{ total }}</p>
      <p>{{ readings }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    readings: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>
.card {
  background-color: palevioletred;
  width: 10rem;
  height: 5rem;
  align-items: center;
}
</style>
