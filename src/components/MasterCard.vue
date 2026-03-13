<script setup>
import Card from 'primevue/card'
import Tag from 'primevue/tag'

defineProps({
  name: { type: String, required: true },
  style: { type: String, required: true },
  techniques: { type: Array, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <Card class="master-card">
    <template #header>
      <img :src="image" :alt="name" class="master-card__photo" />
    </template>
    <template #title>
      <span class="master-card__name">{{ name }}</span>
    </template>
    <template #subtitle>
      <span class="master-card__style">
        <i class="pi pi-music" />
        {{ style }}
      </span>
    </template>
    <template #content>
      <p class="master-card__description">{{ description }}</p>
      <div class="master-card__techniques">
        <Tag
          v-for="technique in techniques"
          :key="technique"
          :value="technique"
          class="master-card__tag"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.master-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.master-card__photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
}

.master-card__name {
  font-size: 1.1rem;
  font-weight: 700;
}

.master-card__style {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--p-text-muted-color);
  font-size: 0.9rem;
}

.master-card__description {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  color: var(--p-text-color);
}

.master-card__techniques {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.master-card__tag {
  font-size: 0.75rem;
}
</style>
