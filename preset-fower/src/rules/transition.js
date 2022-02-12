/**
 * transitionNone	transition-property: none;
 * transitionAll	transition-property: all;
 * transitionCommon	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
 * transitionColors	transition-property: background-color, border-color, color, fill, stroke;
 * transitionOpacity	transition-property: opacity;
 * transitionShadow	transition-property: box-shadow;
 * transitionTransform	transition-property: transform;
 */

 const data = {
  transitionnone: 'none',
  transitionall: 'all',
  transitioncommon: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  transitioncolors: 'background-color, border-color, color, fill, stroke',
  transitionopacity: 'opacity',
  transitionshadow: 'box-shadow',
  transitiontransform: 'transform',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      'transition-property': data[k],
    }
  }
}

export default {
  name: 'transition',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}