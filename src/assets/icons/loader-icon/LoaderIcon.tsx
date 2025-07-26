import type { ComponentPropsWithRef } from 'react'

import LoaderCircle from './loader-circle.svg'

interface LoaderIconProps extends ComponentPropsWithRef<'img'> {}

export const LoaderIcon = ({ alt, ...props }: LoaderIconProps) => (
  <img
    alt={alt ?? 'Loader icon'}
    src={LoaderCircle}
    {...props}
  />
)
