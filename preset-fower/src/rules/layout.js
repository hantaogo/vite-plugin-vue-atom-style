const ToCenter = 'tocenter'
const ToCenterX = 'tocenterx'
const ToCenterY = 'tocentery'
const ToLeft = 'toleft'
const ToRight = 'toright'
const ToTop = 'totop'
const ToBottom = 'tobottom'
const ToBetween = 'tobetween'
const ToEvenly = 'toevenly'
const ToAround = 'toaround'

const JustifyContent = 'justify-content'
const AlignItems = 'align-items'
const Center = 'center'
const FlexStart = 'flex-start'
const FlexEnd = 'flex-end'
const SpaceBetween = 'space-between'
const SpaceAround = 'space-around'
const SpaceEvenly = 'space-evenly'

const keys = {
  [ToCenter]: true,
  [ToCenterX]: true,
  [ToCenterY]: true,
  [ToLeft]: true,
  [ToRight]: true,
  [ToTop]: true,
  [ToBottom]: true,
  [ToBetween]: true,
  [ToEvenly]: true,
  [ToAround]: true,
}

const getStyle = (k, config, isColumn) => {
  if (k === ToCenter) {
    return {
      [JustifyContent]: Center,
      [AlignItems]: Center,
    }
  } else if (k === ToCenterX) {
    return {
      [isColumn ? AlignItems : JustifyContent]: Center,
    }
  } else if (k === ToCenterY) {
    return {
      [isColumn ? JustifyContent : AlignItems]: Center,
    }
  } else if (k === ToLeft) {
    return {
      [isColumn ? AlignItems : JustifyContent]: FlexStart,
    }
  } else if (k === ToRight) {
    return {
      [isColumn ? AlignItems : JustifyContent]: FlexEnd,
    }
  } else if (k === ToTop) {
    return {
      [isColumn ? JustifyContent : AlignItems]: FlexStart,
    }
  } else if (k === ToBottom) {
    return {
      [isColumn ? JustifyContent : AlignItems]: FlexEnd,
    }
  } else if (k === ToBetween) {
    return {
      [JustifyContent]: SpaceBetween,
    }
  } else if (k === ToAround) {
    return {
      [JustifyContent]: SpaceAround,
    }
  } else if (k === ToEvenly) {
    return {
      [JustifyContent]: SpaceEvenly,
    }
  }
}

export default {
  name: 'layout',
  match: (k, config) => {
    const ks = k.split('-')
    for (const t of ks) {
      if (keys[t]) {
        return true
      }
    }
  },
  translate: (k, config) => {
    const ks = k.split('-')
    const isColumn = ks.find(t => t === 'column')
    const obj = {
      display: 'flex',
    }
    if (isColumn) {
      obj['flex-direction'] = 'column'
    }
    for (const t of ks) {
      if (keys[t]) {
        Object.assign(obj, getStyle(t, config, isColumn))
      }
    }
    return obj
  },
}