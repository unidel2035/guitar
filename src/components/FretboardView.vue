<script setup>
import GuitarString from './GuitarString.vue'

const FRET_MARKERS = [3, 5, 7, 9, 12]

const props = defineProps({
  tuning: {
    type: Array,
    default: () => ['E', 'B', 'G', 'D', 'A', 'E'],
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

const fretNumbers = Array.from({ length: props.frets + 1 }, (_, i) => i)
</script>

<template>
  <div class="fretboard">
    <div class="fretboard__numbers">
      <div
        v-for="fret in fretNumbers"
        :key="fret"
        class="fretboard__number"
      >
        {{ fret }}
      </div>
    </div>

    <div class="fretboard__strings">
      <GuitarString
        v-for="(note, index) in tuning"
        :key="index"
        :tuning="note"
        :frets="frets"
        :highlightedNotes="highlightedNotes"
      />
    </div>

    <div class="fretboard__markers">
      <div
        v-for="fret in fretNumbers"
        :key="fret"
        class="fretboard__marker-cell"
      >
        <span
          v-if="FRET_MARKERS.includes(fret)"
          class="fretboard__marker"
          :class="{ 'fretboard__marker--double': fret === 12 }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fretboard {
  display: inline-flex;
  flex-direction: column;
  overflow-x: auto;
}

.fretboard__numbers,
.fretboard__markers {
  display: flex;
}

.fretboard__number,
.fretboard__marker-cell {
  width: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fretboard__number {
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--p-text-muted-color);
}

.fretboard__marker-cell {
  height: 1.5rem;
}

.fretboard__marker {
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--p-surface-400);
}

.fretboard__marker--double {
  box-shadow: 0.5rem 0 0 var(--p-surface-400), -0.5rem 0 0 var(--p-surface-400);
  background: var(--p-surface-400);
}
</style>
