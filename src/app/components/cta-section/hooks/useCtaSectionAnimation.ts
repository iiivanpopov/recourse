import { easings, useTransition } from '@react-spring/web'

const baseAnimationConfig = {
  from: {
    opacity: 0,
    transform: 'translateY(-80px)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)'
  },
  leave: {
    opacity: 0,
    transform: 'translateY(-80px)'
  },
  config: {
    duration: 500,
    easing: easings.easeInOutCubic
  }
}

export const useCtaSectionAnimation = (
  intersectionRatio: number,
  iconIntersectionRation: number
) => {
  const showTitle = intersectionRatio >= 0.95
  const showSubtitle = intersectionRatio >= 0.87
  const showDescription = intersectionRatio >= 0.67
  const showButtons = intersectionRatio >= 0.5
  const showIcon = iconIntersectionRation >= 0.5

  const titleTransition = useTransition(showTitle, {
    ...baseAnimationConfig,
    enter: {
      ...baseAnimationConfig.enter,
      delay: 50
    }
  })

  const subtitleTransition = useTransition(showSubtitle, {
    ...baseAnimationConfig,
    enter: {
      ...baseAnimationConfig.enter,
      delay: 100
    }
  })

  const descriptionTransition = useTransition(showDescription, {
    ...baseAnimationConfig,
    enter: {
      ...baseAnimationConfig.enter,
      delay: 150
    }
  })

  const button1Transition = useTransition(showButtons, {
    ...baseAnimationConfig,
    enter: {
      ...baseAnimationConfig.enter,
      delay: 200
    }
  })

  const button2Transition = useTransition(showButtons, {
    ...baseAnimationConfig,
    enter: {
      ...baseAnimationConfig.enter,
      delay: 250
    }
  })

  const iconTransition = useTransition(showIcon, {
    ...baseAnimationConfig,
    enter: {
      ...baseAnimationConfig.enter,
      delay: 275
    }
  })

  return {
    titleTransition,
    subtitleTransition,
    descriptionTransition,
    button1Transition,
    button2Transition,
    iconTransition
  }
}
