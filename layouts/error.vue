<template>
  <section class="container">
    <p>Error details: {{ error.message }}</p>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
</style>
