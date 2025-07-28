export const courseModules: {
  icon: string
  id: number
  title: string
  topics: string[]
}[] = [
  {
    id: 1,
    title: 'Introduction',
    icon: '📘',
    topics: [
      'What is React and why TypeScript',
      'Setting up the environment (Vite + TypeScript)',
      'Project structure overview'
    ]
  },
  {
    id: 2,
    title: 'React Fundamentals',
    icon: '⚛️',
    topics: [
      'JSX and functional components',
      'Props and useState',
      'Handling events and forms',
      'Rendering lists with keys',
      'Using useEffect for side effects',
      'Conditional rendering'
    ]
  },
  {
    id: 3,
    title: 'Hooks & Logic',
    icon: '🧠',
    topics: [
      'useRef, useMemo, useCallback for performance',
      'useReducer for complex state',
      'Context API for shared state',
      'Building custom hooks'
    ]
  },
  {
    id: 4,
    title: 'React Router',
    icon: '🧩',
    topics: [
      'Installing and configuring react-router-dom',
      'Routing basics: Route, Link, useNavigate',
      'Dynamic and nested routes',
      'Lazy loading with React.lazy and Suspense'
    ]
  },
  {
    id: 5,
    title: 'TypeScript Essentials',
    icon: '🧾',
    topics: [
      'Type annotations, primitives, arrays, tuples',
      'type vs interface',
      'Generics, enums, union & intersection types',
      'Typing functions, objects, events, promises',
      'Configuring tsconfig.json'
    ]
  },
  {
    id: 6,
    title: 'TypeScript in React',
    icon: '🧱',
    topics: [
      'Typing props, state, events',
      'Typing custom hooks and reducers',
      'Typing API responses and form data',
      'Using utility types (Partial, Omit, Record, etc.)',
      'Error typing and handling'
    ]
  },
  {
    id: 7,
    title: 'Working with APIs',
    icon: '🔄',
    topics: [
      'Fetching data with fetch and axios',
      'Error and loading states',
      'Caching and mutations with react-query',
      'Optimistic UI updates'
    ]
  },
  {
    id: 8,
    title: 'Forms & Validation',
    icon: '✅',
    topics: [
      'Handling forms with react-hook-form',
      'Strongly-typed form fields',
      'Validation using zod or yup'
    ]
  },
  {
    id: 9,
    title: 'Architecture & Best Practices',
    icon: '🧩',
    topics: [
      'Organizing files: UI, features, shared code',
      'Component responsibility separation',
      'Centralizing reusable logic (hooks, utils)',
      'Lazy loading and code splitting',
      'Clean, scalable, readable code practices'
    ]
  },
  {
    id: 10,
    title: 'Testing',
    icon: '🧪',
    topics: [
      'Setting up Jest + React Testing Library',
      'Rendering and interaction tests',
      'Mocking async behavior',
      'Testing custom hooks and logic'
    ]
  }
]
