import { easings } from '@react-spring/web'

export const inViewAnimation = (inView: boolean) => ({
  from: {
    opacity: 0,
    scale: 0,
    transform: 'translateY(-40px)'
  },
  to: inView
    ? {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0px)'
      }
    : {
        opacity: 0,
        scale: 0,
        transform: 'translateY(-40px)'
      },
  config: {
    friction: 30,
    tension: 350,
    easing: easings.easeInOutQuint
  }
})
