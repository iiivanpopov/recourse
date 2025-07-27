import { easings, useTrail } from '@react-spring/web'

export const useSkillsSectionAnimation = (inView: boolean) => {
  const trail = useTrail(3, {
    from: {
      opacity: 0,
      scale: 0,
      transform: 'translateY(-80px)'
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
          transform: 'translateY(-80px)'
        },
    config: {
      friction: 20,
      tension: 200,
      easing: easings.easeInOutCubic
    }
  })

  return trail
}
