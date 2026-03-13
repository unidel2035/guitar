<script setup>
import Card from 'primevue/card'
import Panel from 'primevue/panel'

const agents = [
  { name: 'FretboardCoach', icon: 'pi pi-table', description: 'Помогает освоить гриф гитары, расположение нот и аккордов' },
  { name: 'ScaleAgent', icon: 'pi pi-music', description: 'Обучает гаммам и ладам, строит визуализации на грифе' },
  { name: 'HarmonyAgent', icon: 'pi pi-sliders-h', description: 'Объясняет гармонию, аккордовые прогрессии и тональности' },
  { name: 'StyleMaster', icon: 'pi pi-star', description: 'Знакомит со стилями игры великих гитаристов' },
]

const stack = [
  { name: 'Vue 3', description: 'Прогрессивный JavaScript-фреймворк (Composition API)' },
  { name: 'PrimeVue 4', description: 'Библиотека UI-компонентов с темой Aura' },
  { name: 'Vue Router 4', description: 'Официальный роутер для Vue.js' },
  { name: 'Vite 6', description: 'Быстрый инструмент сборки и dev-сервер' },
  { name: 'Integram', description: 'Backend и хранилище данных' },
]
</script>

<template>
  <div class="about-page">
    <div class="about-page__header">
      <h1 class="about-page__title">
        <i class="pi pi-headphones" /> Guitar AI
      </h1>
      <p class="about-page__subtitle">
        Интерактивная платформа для изучения гитары с помощью искусственного интеллекта
      </p>
    </div>

    <div class="about-page__content">
      <Card class="about-page__card">
        <template #title>О проекте</template>
        <template #content>
          <p>
            Guitar AI — обучающая платформа, которая сочетает интерактивную визуализацию
            грифа гитары с ИИ-агентами. Платформа помогает начинающим и опытным гитаристам
            изучать ноты, гаммы, аккорды и стили игры известных музыкантов.
          </p>
        </template>
      </Card>

      <Panel header="ИИ-агенты" class="about-page__panel">
        <div class="about-page__agents">
          <div v-for="agent in agents" :key="agent.name" class="about-page__agent">
            <i :class="[agent.icon, 'about-page__agent-icon']" />
            <div>
              <strong>{{ agent.name }}</strong>
              <p>{{ agent.description }}</p>
            </div>
          </div>
        </div>
      </Panel>

      <Panel header="Технологический стек" class="about-page__panel">
        <div class="about-page__stack">
          <div v-for="item in stack" :key="item.name" class="about-page__stack-item">
            <strong>{{ item.name }}</strong>
            <span>{{ item.description }}</span>
          </div>
        </div>
      </Panel>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.about-page__header {
  text-align: center;
  margin-bottom: 2rem;
}

.about-page__title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.about-page__subtitle {
  color: var(--p-text-muted-color);
  font-size: 1.1rem;
}

.about-page__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-page__card {
  width: 100%;
}

.about-page__panel {
  width: 100%;
}

.about-page__agents {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-page__agent {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.about-page__agent-icon {
  font-size: 1.5rem;
  margin-top: 0.25rem;
  color: var(--p-primary-color);
}

.about-page__agent p {
  margin: 0.25rem 0 0;
  color: var(--p-text-muted-color);
}

.about-page__stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.about-page__stack-item {
  display: flex;
  gap: 1rem;
}

.about-page__stack-item span {
  color: var(--p-text-muted-color);
}
</style>
