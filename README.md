# Rick and Morty

Учебный проект в рамках React-интенсива компании Andersen

## Выполнили:

- Владислав Хакимов https://github.com/Kleepers

- Эльдар Сайдашев https://github.com/cybervasyan


## Требования к функциональности

**React**

  - Пишем функциональные компоненты c хуками в приоритете над классовыми: [components](https://github.com/Kleepers/andersen-react/tree/main/src/components)
  - Есть четкое разделение на умные и глупые компоненты: [DashboardContainer](https://github.com/Kleepers/andersen-react/blob/main/src/components/Dashboard/DashboardContainer.tsx) [Dashboard](https://github.com/Kleepers/andersen-react/blob/main/src/components/Dashboard/Dashboard.tsx)
  - Есть рендеринг списков: [SearchBar](https://github.com/Kleepers/andersen-react/blob/main/src/components/SearchBar/SearchBar.tsx), [CardsContainer](https://github.com/Kleepers/andersen-react/blob/main/src/components/Cards/CardsContainer.tsx)
  - Реализована хотя бы одна форма: [SignIn](https://github.com/Kleepers/andersen-react/blob/main/src/components/SignIn/SignIn.tsx), [SearchBar](https://github.com/Kleepers/andersen-react/blob/main/src/components/SearchBar/SearchBar.tsx)
  - Есть применение Контекст API: [FeatureContext](https://github.com/Kleepers/andersen-react/blob/main/src/app/FeatureContext.tsx)
  - Есть применение предохранителя: [ErrorBoundaryContainer](https://github.com/Kleepers/andersen-react/blob/main/src/components/ErrorBoundary/ErrorBoundaryContainer.tsx)
  - Есть хотя бы один кастомный хук: [useDebounce](https://github.com/Kleepers/andersen-react/blob/main/src/hooks/useDebounce.ts)
  - Хотя бы несколько компонентов используют PropTypes: [Card](https://github.com/Kleepers/andersen-react/blob/main/src/components/Cards/Card.tsx), [Suggestion](https://github.com/Kleepers/andersen-react/blob/main/src/components/Suggestion/Suggestion.tsx)
  - Поиск не должен триггерить много запросов к серверу: реализовано с помощью кастомного хука useDebounce [SearchbarContainer](https://github.com/Kleepers/andersen-react/blob/main/src/components/SearchBar/SearchBarContainer.tsx)
  - Есть применение lazy + Suspense: [Home](https://github.com/Kleepers/andersen-react/blob/main/src/components/Home/Home.tsx)

**Redux**

  - Используем Modern Redux with Redux Toolkit: [store](https://github.com/Kleepers/andersen-react/blob/main/src/app/store.ts)
  - Используем слайсы: [characterSlice](https://github.com/Kleepers/andersen-react/blob/main/src/features/characterSlice.ts), [authSlice](https://github.com/Kleepers/andersen-react/blob/main/src/features/authSlice.ts)
  - Есть хотя бы одна кастомная мидлвара: [characterMiddleware](https://github.com/Kleepers/andersen-react/blob/main/src/middleware/characterMiddleware.ts), [initMiddleware](https://github.com/Kleepers/andersen-react/blob/main/src/middleware/initMiddleware.ts)
  - Используется RTK Query: [characterApi](https://github.com/Kleepers/andersen-react/blob/main/src/services/characterApi.tsx), [authApi](https://github.com/Kleepers/andersen-react/blob/main/src/services/authApi.ts)
  - Используется Transforming Responses: [characterApi](https://github.com/Kleepers/andersen-react/blob/main/src/services/characterApi.tsx)
  
**Второй уровень (необязательный)**

  - TypeScript
  - Feature Flags [CardDetails](https://github.com/Kleepers/andersen-react/blob/main/src/components/CardDetails/CardDetails.tsx), [server](https://github.com/Kleepers/andersen-react/tree/main/server)


## Зоны ответственности

Хакимов Владислав

| Фичи | Требования
| ------------- |:-------------:|
| История | Разделение на умные и глупые компоненты
| Избранное (получение данных, работа со стором) | Рендеринг списков
| Компонент Header | Форма
| Компонент  SearchBar | Context API
| Страница персонажа (получение данных, работа со стором) | Предохранитель
| useDebounce | Кастомный хук
| Регистрация и вход | debounce input
| Логика добавления в избранное | Redux Toolkit
| Поиск персонажей  | Кастомные мидлвары
| SignIn, SignUp (логика) | RTK Query
|   | Transforming responce
|   | TypeScript
|   | Feature Flag
|   | Слайсы

Эльдар Сайдашев

| Фичи | Требования
| ------------- |:-------------:|
| Избранное (стили и логика кнопок) | Разделение на умные и глупые компоненты
| Компоненты Cards, Card | Рендеринг списков
| Компоненты Pagination | Форма
| Рефакторинг SignIn, SignUp + валидация полей | PropTypes
| Валидация полей | lazy + Suspense
| Страница персонажа (стили и логика кнопок) | PropTypes
| Стили | Redux Toolkit
|  | Слайсы 
|   | RTK Query
|   | TypeScript

