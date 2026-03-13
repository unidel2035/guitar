<script setup>
import GuitarString from './GuitarString.vue'

// Frets with single dot markers
const SINGLE_MARKERS = [3, 5, 7, 9]
// Frets with double dot markers
const DOUBLE_MARKERS = [12]

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

// fretNumbers from 1..frets (open string is position 0 handled separately)
const fretNumbers = Array.from({ length: props.frets }, (_, i) => i + 1)
</script>

<template>
  <div class="fretboard">
    <!-- Fret number labels (above) -->
    <div class="fretboard__header">
      <div class="fretboard__header-spacer" />
      <div class="fretboard__open-label" />
      <div class="fretboard__fret-labels">
        <div
          v-for="fret in fretNumbers"
          :key="fret"
          class="fretboard__fret-label"
        >
          {{ fret }}
        </div>
      </div>
    </div>

    <!-- The fretboard body: nut + strings -->
    <div class="fretboard__body">
      <!-- Nut -->
      <div class="fretboard__nut-spacer" />
      <div class="fretboard__nut" />

      <!-- Strings -->
      <div class="fretboard__strings">
        <GuitarString
          v-for="(note, index) in tuning"
          :key="index"
          :tuning="note"
          :frets="frets"
          :highlightedNotes="highlightedNotes"
          :stringIndex="index"
          :stringCount="tuning.length"
        />
      </div>

      <!-- Fret lines overlay -->
      <div class="fretboard__frets-overlay">
        <div class="fretboard__open-gap" />
        <div class="fretboard__fret-lines">
          <div
            v-for="fret in fretNumbers"
            :key="fret"
            class="fretboard__fret-line"
          />
        </div>
      </div>

      <!-- Fretboard wood background -->
    </div>

    <!-- Position markers row (below fretboard) -->
    <div class="fretboard__markers">
      <div class="fretboard__marker-spacer" />
      <div class="fretboard__open-gap-marker" />
      <div class="fretboard__marker-cells">
        <div
          v-for="fret in fretNumbers"
          :key="fret"
          class="fretboard__marker-cell"
        >
          <template v-if="DOUBLE_MARKERS.includes(fret)">
            <span class="fretboard__marker" />
            <span class="fretboard__marker" />
          </template>
          <span
            v-else-if="SINGLE_MARKERS.includes(fret)"
            class="fretboard__marker"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fretboard {
  display: inline-flex;
  flex-direction: column;
  overflow-x: auto;
  background: var(--p-surface-50);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* ── Header (fret numbers) ── */
.fretboard__header {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}

.fretboard__header-spacer {
  width: 2rem; /* matches label width */
  flex-shrink: 0;
}

.fretboard__open-label {
  width: 2.5rem; /* nut + open area */
  flex-shrink: 0;
}

.fretboard__fret-labels {
  display: flex;
}

.fretboard__fret-label {
  width: 3.5rem;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--p-text-muted-color);
}

/* ── Body ── */
.fretboard__body {
  position: relative;
  background: linear-gradient(
    to bottom,
    #c8a96e 0%,
    #b8954f 40%,
    #c8a96e 100%
  );
  border-radius: 0.25rem;
  padding: 0.25rem 0;
}

.fretboard__nut-spacer {
  width: 2rem;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--p-surface-50);
  border-radius: 0.25rem 0 0 0.25rem;
}

/* Nut: the thick bar at position 0 */
.fretboard__nut {
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 6px;
  background: linear-gradient(to right, #e8d5a0, #c4a35a, #e8d5a0);
  border-radius: 2px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.25);
  z-index: 3;
}

/* Strings area */
.fretboard__strings {
  position: relative;
  z-index: 2;
  padding-left: 2.5rem; /* label spacer + nut */
}

/* Fret lines overlay */
.fretboard__frets-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  pointer-events: none;
  z-index: 1;
}

.fretboard__open-gap {
  width: 2.5rem;
  flex-shrink: 0;
}

.fretboard__fret-lines {
  display: flex;
  flex: 1;
}

.fretboard__fret-line {
  flex: 1;
  border-right: 2px solid rgba(80, 50, 10, 0.5);
  box-sizing: border-box;
}

/* ── Position markers ── */
.fretboard__markers {
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  height: 1.25rem;
}

.fretboard__marker-spacer {
  width: 2rem;
  flex-shrink: 0;
}

.fretboard__open-gap-marker {
  width: 2.5rem;
  flex-shrink: 0;
}

.fretboard__marker-cells {
  display: flex;
}

.fretboard__marker-cell {
  width: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

.fretboard__marker {
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: var(--p-surface-400);
}
</style>
