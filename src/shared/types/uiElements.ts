import type { ButtonVariant, TypographyTag, TypographyVariant } from '../ui'

export interface TextRenderProps {
  id: string
  tag: TypographyTag
  variant: TypographyVariant
}

export interface ButtonRenderProps {
  id: string
  variant: ButtonVariant
}
