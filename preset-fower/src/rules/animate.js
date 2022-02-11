/**
 * animation
 * 
 * animateXXX	对应 config.animationXXX;
 */
const getStyle = (k, config) => {
  const name = k.replace('animate', '')
  const animation = config.theme.animation[name]
  if (animation) {
    return {
      animation,
      animate: {
        name,
        keyframes: config.theme.keyframes[name],
      },
    }
  }
}

export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}
