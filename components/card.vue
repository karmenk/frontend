<template>
  <div class="container card">
    <div>
      <p>Day total: {{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
.card {
  background-color: #e8ecef;
  width: 10rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  color: #2f2f2f;
}
</style>
