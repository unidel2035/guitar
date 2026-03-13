<script setup>
import Button from 'primevue/button'
import GuitarString from '../components/GuitarString.vue'

const STANDARD_TUNING = ['E', 'B', 'G', 'D', 'A', 'E']
const C_MAJOR_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
</script>

<template>
  <div class="home">
    <h1 class="home__title">Guitar AI</h1>
    <p class="home__subtitle">Твой ИИ-наставник по гитаре</p>
    <Button label="Начать обучение" icon="pi pi-music" size="large" />

    <div class="home__fretboard">
      <p class="home__fretboard-label">Гамма До мажор на грифе:</p>
      <GuitarString
        v-for="(tuning, index) in STANDARD_TUNING"
        :key="index"
        :tuning="tuning"
        :frets="12"
        :highlighted-notes="C_MAJOR_NOTES"
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  gap: 1.5rem;
}

.home__title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.home__subtitle {
  font-size: 1.25rem;
  color: var(--p-text-muted-color);
  margin: 0;
}

.home__fretboard {
  margin-top: 2rem;
  width: 100%;
  overflow-x: auto;
}

.home__fretboard-label {
  font-size: 1rem;
  color: var(--p-text-muted-color);
  margin-bottom: 0.5rem;
  text-align: center;
}
</style>
