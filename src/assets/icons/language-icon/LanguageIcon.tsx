import type { ComponentPropsWithRef } from 'react'

interface LanguageIconProps extends ComponentPropsWithRef<'svg'> {}

export const LanguageIcon = (props: LanguageIconProps) => (
  <svg
    fill='none'
    height='24'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='m5 8 6 6' />
    <path d='m4 14 6-6 2-3' />
    <path d='M2 5h12' />
    <path d='M7 2h1' />
    <path d='m22 22-5-10-5 10' />
    <path d='M14 18h6' />
  </svg>
)
