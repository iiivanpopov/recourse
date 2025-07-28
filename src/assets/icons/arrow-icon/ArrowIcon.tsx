import type { ComponentPropsWithRef } from 'react'

export interface ArrowProps extends ComponentPropsWithRef<'svg'> {}

export const ArrowIcon = (props: ArrowProps) => (
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
    <path d='m12 19-7-7 7-7' />
    <path d='M19 12H5' />
  </svg>
)
