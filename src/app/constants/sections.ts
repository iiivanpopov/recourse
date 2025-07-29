import {
  CtaSection,
  NewslettersSection,
  PlanSection,
  SkillsSection
} from '../components'

export const SECTIONS = [
  { id: 0, Component: CtaSection, backgroundClass: 'background1' },
  { id: 1, Component: SkillsSection, backgroundClass: 'background2' },
  { id: 2, Component: PlanSection, backgroundClass: 'background3' },
  { id: 3, Component: NewslettersSection, backgroundClass: 'background4' }
]

export const SECTIONS_COUNT = SECTIONS.length
