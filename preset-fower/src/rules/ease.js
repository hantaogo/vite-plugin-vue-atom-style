/**
 * Transition Timing Function
 * 
 * easeLinear	transition-timing-function: linear;
 * easeIn	transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
 * easeOut	transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
 * easeInOut	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 */

const data = {
  easelinear: 'linear',
  easein: 'cubic-bezier(0.4, 0, 1, 1)',
  easeout: 'cubic-bezier(0, 0, 0.2, 1)',
  easeinout: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      'transition-timing-function': data[k],
    }
  }
}

export default {
  name: 'ease',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}