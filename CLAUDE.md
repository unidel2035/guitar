# Guitar AI — Claude Code Instructions

## Проект

Обучающая платформа для изучения гитары с ИИ-агентами. Стек: Vue 3 + PrimeVue + Vite + Integram.

## Язык

- Общение с пользователем: русский
- Код, переменные, комменты в коде: английский
- Git-коммиты: английский

## Стек и версии

- Vue 3 (Composition API, `<script setup>`)
- PrimeVue 4 (тема Aura)
- Vue Router 4
- Vite 6
- Integram (backend/data)

## Правила кода

### Vue-компоненты

- Всегда использовать `<script setup>` синтаксис
- Порядок блоков: `<script setup>` → `<template>` → `<style scoped>`
- Props определять через `defineProps()` с типами
- Events через `defineEmits()`
- Реактивность: `ref()` для примитивов, `reactive()` для объектов

### Именование

- Компоненты: PascalCase (`GuitarString.vue`)
- Файлы views: PascalCase с суффиксом Page (`ScalesPage.vue`)
- Переменные и функции: camelCase
- CSS-классы: BEM (`note--root`, `fretboard__string`)
- Константы: UPPER_SNAKE_CASE

### Структура папок

```
src/
├── agents/        # ИИ-агенты (ScaleAgent, HarmonyAgent, StyleMaster)
├── components/    # Переиспользуемые компоненты
├── views/         # Страницы (по одной на маршрут)
├── data/          # Статические данные (scales.js, masters.js)
├── services/      # API-сервисы (integram.js)
├── router/        # Vue Router конфигурация
├── assets/        # Статика (CSS, изображения)
├── App.vue
└── main.js
```

### PrimeVue

- Импортировать компоненты локально в каждом файле
- Использовать PrimeIcons для иконок
- Не писать кастомный CSS если есть подходящий PrimeVue компонент

### Музыкальная теория

- Хроматическая шкала: `['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']`
- Стандартный строй гитары (от 1 к 6 струне): `['E', 'B', 'G', 'D', 'A', 'E']`
- Количество ладов по умолчанию: 12

## Git-воркфлоу

- Ветки: `issue-{номер}-{краткое-описание}` (например `issue-2-guitar-string`)
- Коммиты: conventional commits (`feat:`, `fix:`, `refactor:`, `docs:`)
- Один issue = одна ветка = один PR
- Co-author: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`

## Integram

- Для работы с данными использовать MCP-инструменты Integram
- Таблицы: `scales`, `chords`, `progressions`, `guitarists`, `user_progress`
- Всегда делать fallback на статические данные из `src/data/` при ошибке API

## Чего НЕ делать

- Не использовать Options API — только Composition API с `<script setup>`
- Не устанавливать Tailwind — стилизация через PrimeVue + scoped CSS
- Не создавать файлы вне `src/` без необходимости
- Не хардкодить ноты — использовать хроматическую шкалу и вычисления
- Не коммитить `node_modules/`, `.env`, `dist/`

---

Issue to solve: https://github.com/unidel2035/guitar/issues/1
Your prepared branch: issue-1-456ac7682c0f
Your prepared working directory: /tmp/gh-issue-solver-1773389976753

Proceed.


Run timestamp: 2026-03-13T08:19:39.342Z