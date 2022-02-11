const keys = {
  tocenter: true,
}

const Flex = 'flex'
const JustifyContent = 'justify-content'
const AlignItems = 'align-items'
const Center = 'center'
const FlexStart = 'flex-start'
const FlexEnd = 'flex-end'
const SpaceBetween = 'space-between'
const SpaceAround = 'space-around'
const SpaceEvenly = 'space-evenly'

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
  const direction = getDirection(classNames)
  if (k === 'tocenter') {
    console.log('direction：', direction)
    return {
      display: Flex,
      [JustifyContent]: Center,
      [AlignItems]: Center,
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