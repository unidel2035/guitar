<script setup>
import { computed } from 'vue'

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const props = defineProps({
  tuning: {
    type: String,
    required: true,
  },
  frets: {
    type: Number,
    default: 12,
  },
  highlightedNotes: {
    type: Array,
    default: () => [],
  },
})

const notes = computed(() => {
  const startIndex = NOTES.indexOf(props.tuning)
  return Array.from({ length: props.frets + 1 }, (_, i) => NOTES[(startIndex + i) % 12])
})

function isHighlighted(note) {
  return props.highlightedNotes.includes(note)
}
</script>

<template>
  <div class="guitar-string">
    <div class="guitar-string__frets">
      <div
        v-for="(note, index) in notes"
        :key="index"
        class="guitar-string__fret"
        :class="{
          'guitar-string__fret--open': index === 0,
          'guitar-string__fret--highlighted': isHighlighted(note),
        }"
      >
        <span class="guitar-string__note">{{ note }}</span>
        <div v-if="index > 0" class="guitar-string__wire" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.guitar-string {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}

.guitar-string__frets {
  display: flex;
  align-items: center;
  position: relative;
}

.guitar-string__fret {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-right: 2px solid var(--p-surface-400);
  background: var(--p-surface-100);
  cursor: default;
  transition: background 0.15s;
}

.guitar-string__fret--open {
  border-right: 3px solid var(--p-surface-600);
  background: var(--p-surface-50);
}

.guitar-string__fret--highlighted {
  background: var(--p-primary-100);
}

.guitar-string__note {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--p-text-color);
  z-index: 1;
}

.guitar-string__fret--highlighted .guitar-string__note {
  color: var(--p-primary-700);
}

.guitar-string__wire {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--p-surface-500);
  transform: translateY(-50%);
  z-index: 0;
}
</style>
