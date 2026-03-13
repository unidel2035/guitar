<script setup>
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import MasterCard from '../components/MasterCard.vue'
import { masters } from '../data/masters.js'

const searchQuery = ref('')
const selectedStyle = ref(null)

const styles = computed(() => {
  const unique = [...new Set(masters.map((m) => m.style))]
  return [{ label: 'Все стили', value: null }, ...unique.map((s) => ({ label: s, value: s }))]
})

const filteredMasters = computed(() => {
  return masters.filter((master) => {
    const matchesSearch =
      !searchQuery.value ||
      master.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStyle = !selectedStyle.value || master.style === selectedStyle.value
    return matchesSearch && matchesStyle
  })
})
</script>

<template>
  <div class="masters-page">
    <div class="masters-page__header">
      <h1><i class="pi pi-star" /> Гитаристы</h1>
      <p class="masters-page__subtitle">Изучайте стиль и технику великих гитаристов</p>
    </div>

    <div class="masters-page__filters">
      <InputText
        v-model="searchQuery"
        placeholder="Поиск по имени..."
        class="masters-page__search"
      />
      <Select
        v-model="selectedStyle"
        :options="styles"
        option-label="label"
        option-value="value"
        placeholder="Фильтр по стилю"
        class="masters-page__style-filter"
      />
    </div>

    <div v-if="filteredMasters.length === 0" class="masters-page__empty">
      <i class="pi pi-search" />
      <p>Гитаристы не найдены</p>
    </div>

    <div v-else class="masters-page__grid">
      <MasterCard
        v-for="master in filteredMasters"
        :key="master.name"
        v-bind="master"
      />
    </div>
  </div>
</template>

<style scoped>
.masters-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.masters-page__header {
  margin-bottom: 1.5rem;
}

.masters-page__header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.masters-page__subtitle {
  color: var(--p-text-muted-color);
  font-size: 1rem;
}

.masters-page__filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.masters-page__search {
  flex: 1;
  min-width: 200px;
}

.masters-page__style-filter {
  min-width: 200px;
}

.masters-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.masters-page__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--p-text-muted-color);
  padding: 3rem;
  font-size: 1.1rem;
}

.masters-page__empty .pi {
  font-size: 2rem;
}
</style>
