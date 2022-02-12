const ToCenter = 'tocenter'
const ToBetween = 'tobetween'
const ToEvenly = 'toevenly'
const ToAround = 'toaround'

const ToCenterX = 'tocenterx'
const ToCenterY = 'tocentery'
const ToLeft = 'toleft'
const ToRight = 'toright'
const ToTop = 'totop'
const ToBottom = 'tobottom'

const PutCenterX = 'putcenterx'
const PutCenterY = 'putcentery'
const PutLeft = 'putleft'
const PutRight = 'putright'
const PutTop = 'puttop'
const PutBottom = 'putbottom'

const Flex = 'flex'
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
  [ToBetween]: true,
  [ToEvenly]: true,
  [ToAround]: true,
  [ToCenterX]: true,
  [ToCenterY]: true,
  [ToLeft]: true,
  [ToRight]: true,
  [ToTop]: true,
  [ToBottom]: true,
  [PutCenterX]: true,
  [PutCenterY]: true,
  [PutLeft]: true,
  [PutRight]: true,
  [PutTop]: true,
  [PutBottom]: true,
}

const getDirection = (classNames) => {
  let isRow = false
  let isRowReverse = false
  let isColumn = false
  let isColumnReverse = false
  for (const className of classNames) {
    if (className === 'row') {
      isRow = true
      break
    } else if (className === 'row-reverse') {
      isRowReverse = true
      break
    } else if (className === 'flex-direction-row') {
      isRow = true
      break
    } else if (className === 'flex-direction-row-reverse') {
      isRowReverse = true
      break
    } else if (className === 'column') {
      isColumn = true
      break
    } else if (className === 'column-reverse') {
      isColumnReverse = true
      break
    } else if (className === 'flex-direction-column') {
      isColumn = true
      break
    } else if (className === 'flex-direction-column-reverse') {
      isColumnReverse = true
      break
    }
  }
  return {
    isRow: !isColumn && !isColumnReverse,
    isRowReverse,
    isColumn,
    isColumnReverse,
  }
}

const getStyle = (k, config, classNames) => {
  // const direction = getDirection(classNames)
  if (k === ToCenter) {
    return {
      display: Flex,
      [JustifyContent]: Center,
      [AlignItems]: Center,
    }
  } else if (k === ToCenterX) {
    return {
      display: Flex,
      [JustifyContent]: Center,
    }
  } else if (k === ToCenterY) {
    return {
      display: Flex,
      [AlignItems]: Center,
    }
  } else if (k === ToLeft) {
    return {
      display: Flex,
      [JustifyContent]: FlexStart,
    }
  } else if (k === ToRight) {
    return {
      display: Flex,
      [JustifyContent]: FlexEnd,
    }
  } else if (k === ToTop) {
    return {
      display: Flex,
      [AlignItems]: FlexStart,
    }
  } else if (k === ToBottom) {
    return {
      display: Flex,
      [AlignItems]: FlexEnd,
    }
  } else if (k === ToBetween) {
    return {
      display: Flex,
      [JustifyContent]: SpaceBetween,
    }
  } else if (k === ToAround) {
    return {
      display: Flex,
      [JustifyContent]: SpaceAround,
    }
  } else if (k === ToEvenly) {
    return {
      display: Flex,
      [JustifyContent]: SpaceEvenly,
    }
  } else if (k === PutCenterX) {
    return {
      display: Flex,
      [AlignItems]: Center,
    }
  } else if (k === PutCenterY) {
    return {
      display: Flex,
      [JustifyContent]: Center,
    }
  } else if (k === PutLeft) {
    return {
      display: Flex,
      [AlignItems]: FlexStart,
    }
  } else if (k === PutRight) {
    return {
      display: Flex,
      [AlignItems]: FlexEnd,
    }
  } else if (k === PutTop) {
    return {
      display: Flex,
      [JustifyContent]: FlexStart,
    }
  } else if (k === PutBottom) {
    return {
      display: Flex,
      [JustifyContent]: FlexEnd,
    }
  }
}

export default {
  match: (k, config) => {
    return !!keys[k]
  },
  translate: (k, config, classNames) => {
    return getStyle(k, config, classNames)
  },
}