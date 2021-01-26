export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
}

export const spin = {
  show: {
    rotate: 360,
    transition: {
      loop: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
}
