import type { ButtonRenderProps, TextRenderProps } from '@/shared/types'

import {
  architectureSkillKeys,
  reactSkillsKeys,
  typescriptSkillKeys
} from './skills'

export const CTA_TEXTS: TextRenderProps[] = [
  { tag: 'h1', variant: 'title', id: 'course.title' },
  { tag: 'h2', variant: 'subtitle', id: 'course.subtitle' },
  { tag: 'div', variant: 'body', id: 'course.description' }
]

export const CTA_BUTTONS: ButtonRenderProps[] = [
  { variant: 'contained', id: 'button.purchase_now' },
  { variant: 'outlined', id: 'button.learn_more' }
]

export const PLAN_TEXTS: TextRenderProps[] = [
  { tag: 'h1', variant: 'title', id: 'plan.title' },
  { tag: 'h2', variant: 'subtitle', id: 'plan.subtitle' }
]

export interface SkillCardRenderProps {
  id: number
  keys: string[]
  skill: 'architecture' | 'react' | 'typescript'
}

export const SKILL_CARDS: SkillCardRenderProps[] = [
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
