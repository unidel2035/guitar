<script setup>
import Button from 'primevue/button'
</script>

<template>
  <div class="home">
    <h1 class="home__title">Guitar AI</h1>
    <p class="home__subtitle">Твой ИИ-наставник по гитаре</p>
    <Button label="Начать обучение" icon="pi pi-music" size="large" />
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
</style>
