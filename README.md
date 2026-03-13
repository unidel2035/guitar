# Guitar AI

Обучающий проект по веб-разработке с ИИ-ассистентом Claude Code. Ты построишь платформу для изучения гитары — от интерактивного грифа до ИИ-агентов, которые рекомендуют гаммы и анализируют стили великих гитаристов.

## Чему ты научишься

- Vue 3 (Composition API, реактивность, компоненты)
- PrimeVue (UI-библиотека: таблицы, графики, формы)
- Integram (backend: хранение данных, API)
- Архитектура ИИ-агентов (rule-based + LLM)
- Git-воркфлоу (issues → ветка → PR → код-ревью)

## Стек

| Технология | Роль |
|-----------|------|
| [Vue 3](https://vuejs.org/) | Frontend-фреймворк |
| [PrimeVue](https://primevue.org/) | UI-компоненты |
| [Vite](https://vite.dev/) | Сборщик |
| [Integram](https://integram.pro/) | Backend / база данных |
| [Claude Code](https://claude.com/claude-code) | ИИ-ассистент для разработки |

## Как работать с проектом

### 1. Установи инструменты

```bash
# Node.js 18+
node -v

# Claude Code
claude --version
```

### 2. Клонируй репозиторий

```bash
git clone https://github.com/unidel2035/guitar.git
cd guitar
```

### 3. Выбери issue

Открой [Issues](https://github.com/unidel2035/guitar/issues) и выбери задачу по уровню:

- `beginner` — начни с этих
- `intermediate` — когда освоишь основы
- `advanced` — ИИ-агенты и сложная логика

### 4. Создай ветку

```bash
git checkout -b issue-1-init-project
```

### 5. Кодь с Claude Code

```bash
claude
```

Скопируй описание issue и попроси Claude помочь. Например:

> Инициализируй Vue 3 проект с PrimeVue и Vite. Настрой роутер с маршрутом `/`. Подключи тему Aura.

### 6. Сделай PR

```bash
git add .
git commit -m "feat: init project with Vue 3 + PrimeVue"
git push origin issue-1-init-project
```

Создай Pull Request на GitHub и попроси ревью.

## Roadmap

### Beginner

| # | Issue | Что делаем |
|---|-------|-----------|
| 1 | [Инициализация проекта](https://github.com/unidel2035/guitar/issues/1) | Vue 3 + PrimeVue + Vite + Router |
| 2 | [GuitarString](https://github.com/unidel2035/guitar/issues/2) | Компонент одной струны с нотами |
| 3 | [FretboardView](https://github.com/unidel2035/guitar/issues/3) | Гриф гитары из 6 струн |
| 4 | [Навигация](https://github.com/unidel2035/guitar/issues/4) | Меню + страница «О проекте» |
| 5 | [MasterCard](https://github.com/unidel2035/guitar/issues/5) | Карточки гитаристов |

### Intermediate

| # | Issue | Что делаем |
|---|-------|-----------|
| 6 | [Справочник гамм](https://github.com/unidel2035/guitar/issues/6) | Данные гамм + UI |
| 7 | [Подсветка на грифе](https://github.com/unidel2035/guitar/issues/7) | Ноты гаммы на грифе |
| 8 | [Integram](https://github.com/unidel2035/guitar/issues/8) | Подключение backend |
| 9 | [Прогрессии](https://github.com/unidel2035/guitar/issues/9) | Аккордовые прогрессии CRUD |
| 10 | [Прогресс](https://github.com/unidel2035/guitar/issues/10) | Трекер обучения |

### Advanced

| # | Issue | Что делаем |
|---|-------|-----------|
| 11 | [ScaleAgent](https://github.com/unidel2035/guitar/issues/11) | ИИ-агент рекомендаций гамм |
| 12 | [Тренажёр](https://github.com/unidel2035/guitar/issues/12) | «Найди ноту на грифе» |
| 13 | [HarmonyAgent](https://github.com/unidel2035/guitar/issues/13) | Генерация прогрессий |
| 14 | [StyleMaster](https://github.com/unidel2035/guitar/issues/14) | Анализ стилей гитаристов |
| 15 | [Dashboard](https://github.com/unidel2035/guitar/issues/15) | Аналитика и рекомендации |

## Структура проекта (после завершения)

```
src/
├── agents/              # ИИ-агенты
│   ├── ScaleAgent.js
│   ├── HarmonyAgent.js
│   └── StyleMaster.js
├── components/          # Vue-компоненты
│   ├── GuitarString.vue
│   ├── FretboardView.vue
│   ├── ClickableFretboard.vue
│   ├── MasterCard.vue
│   ├── AppNavbar.vue
│   └── ...
├── views/               # Страницы
│   ├── HomeView.vue
│   ├── FretboardPage.vue
│   ├── ScalesPage.vue
│   ├── MastersPage.vue
│   ├── ProgressionsPage.vue
│   ├── ProgressPage.vue
│   ├── TrainerPage.vue
│   └── AboutPage.vue
├── data/                # Статические данные
│   ├── scales.js
│   └── masters.js
├── services/            # API-сервисы
│   └── integram.js
├── router/
│   └── index.js
├── App.vue
└── main.js
```

## ИИ-агенты

| Агент | Задача |
|-------|--------|
| **ScaleAgent** | Рекомендует следующую гамму для изучения |
| **HarmonyAgent** | Генерирует и анализирует аккордовые прогрессии |
| **StyleMaster** | Разбирает стили великих гитаристов |

## Советы

- Делай issues по порядку — каждый следующий опирается на предыдущие
- Не бойся спрашивать Claude — он объяснит любой кусок кода
- Коммить часто, пиши понятные сообщения коммитов
- Читай документацию PrimeVue — там есть примеры для каждого компонента
- Если застрял — покажи Claude ошибку из терминала

---

Built with [Claude Code](https://claude.com/claude-code)
