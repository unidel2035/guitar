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
  stringIndex: {
    type: Number,
    default: 0,
  },
  stringCount: {
    type: Number,
    default: 6,
  },
})

const notes = computed(() => {
  const startIndex = NOTES.indexOf(props.tuning)
  return Array.from({ length: props.frets + 1 }, (_, i) => NOTES[(startIndex + i) % 12])
})

// String thickness varies: string 0 (high e) is thinnest, string 5 (low E) is thickest
const stringThickness = computed(() => {
  const thicknesses = [1, 1.5, 2, 2.5, 3, 3.5]
  return thicknesses[props.stringIndex] ?? 2
})

function isHighlighted(note) {
  return props.highlightedNotes.includes(note)
}

function isRootNote(note) {
  return props.highlightedNotes.length > 0 && props.highlightedNotes[0] === note
}
</script>

<template>
  <div class="guitar-string">
    <div class="guitar-string__label">{{ tuning }}</div>
    <div class="guitar-string__body">
      <!-- The string line runs across the whole body -->
      <div
        class="guitar-string__line"
        :style="{ height: stringThickness + 'px' }"
      />
      <!-- Fret cells (open + fretted) -->
      <div class="guitar-string__frets">
        <div
          v-for="(note, index) in notes"
          :key="index"
          class="guitar-string__fret"
          :class="{ 'guitar-string__fret--open': index === 0 }"
        >
          <div
            v-if="isHighlighted(note)"
            class="guitar-string__dot"
            :class="{ 'guitar-string__dot--root': isRootNote(note) }"
          >
            <span class="guitar-string__dot-label">{{ note }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guitar-string {
  display: flex;
  align-items: center;
  height: 2.75rem;
}

.guitar-string__label {
  width: 2rem;
  text-align: right;
  padding-right: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--p-text-muted-color);
  flex-shrink: 0;
}

.guitar-string__body {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
}

.guitar-string__line {
  position: absolute;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--p-surface-500) 60%, white),
    var(--p-surface-600),
    color-mix(in srgb, var(--p-surface-500) 60%, white)
  );
  border-radius: 1px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.guitar-string__frets {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
}

.guitar-string__fret {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
}

.guitar-string__fret--open {
  flex: 0 0 2rem;
}

.guitar-string__dot {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: var(--p-primary-500);
  border: 2px solid var(--p-primary-700);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.guitar-string__dot--root {
  background: var(--p-primary-700);
  border-color: var(--p-primary-900);
}

.guitar-string__dot-label {
  font-size: 0.6rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}
</style>
