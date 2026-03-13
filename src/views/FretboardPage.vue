<script setup>
import FretboardView from '../components/FretboardView.vue'
</script>

<template>
  <div class="fretboard-page">
    <h1 class="fretboard-page__title">Guitar Fretboard</h1>
    <FretboardView />
  </div>
</template>

<style scoped>
.fretboard-page {
  padding: 2rem;
}

.fretboard-page__title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--p-text-color);
}
</style>
