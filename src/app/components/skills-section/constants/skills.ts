export const reactSkillsKeys = [
  'jsx_and_props',
  'state_management',
  'side_effects',
  'performance_optimization',
  'events_and_forms',
  'context_api',
  'lazy_loading',
  'api_integration'
]

export const typescriptSkillKeys = [
  'type_annotations',
  'primitive_types',
  'type_vs_interface',
  'generics',
  'type_composition',
  'react_typing',
  'configuration',
  'utility_types'
]

export const architectureSkillKeys = [
  'solid_principles',
  'clean_architecture',
  'feature_sliced_design',
  'avoid_overengineering',
  'state_management',
  'async_state',
  'testing_strategy',
  'component_decomposition'
]

export const cards: {
  id: number
  keys: string[]
  skill: 'architecture' | 'react' | 'typescript'
}[] = [
  {
    id: 0,
    skill: 'react',
    keys: reactSkillsKeys
  },
  {
    id: 1,
    skill: 'typescript',
    keys: typescriptSkillKeys
  },
  {
    id: 2,
    skill: 'architecture',
    keys: architectureSkillKeys
  }
]
