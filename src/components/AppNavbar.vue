<script setup>
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const items = ref([
  { label: 'Главная', icon: 'pi pi-home', route: '/' },
  { label: 'Гриф', icon: 'pi pi-table', route: '/fretboard' },
  { label: 'Гаммы', icon: 'pi pi-music', route: '/scales' },
  { label: 'Гитаристы', icon: 'pi pi-star', route: '/masters' },
  { label: 'О проекте', icon: 'pi pi-info-circle', route: '/about' },
])
</script>

<template>
  <Menubar :model="items">
    <template #item="{ item, props }">
      <router-link v-if="item.route" :to="item.route" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </router-link>
    </template>
    <template #start>
      <span class="navbar__logo">
        <i class="pi pi-headphones" />
        Guitar AI
      </span>
    </template>
  </Menubar>
</template>

<style scoped>
.navbar__logo {
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
