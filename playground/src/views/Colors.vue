<script setup>
import { ref } from 'vue'
import { colors } from '../../../preset-fower/src/colors'
import { lighten, darken, fade } from '../../../preset-fower/src/color-helper'

const colorNames = ref(Object.keys(colors))
const colorValues = ref(Object.values(colors))
const colorDefValues = Object.values(colors)
const colorPercents = ref(Object.keys(colors).map(_ => 0))
const colorAlphas = ref(Object.keys(colors).map(_ => 100))

const delta = 5

const updateColor = index => {
  // light dark
  if (colorPercents.value[index] < 0) {
    colorValues.value[index] = lighten(colorDefValues[index], -colorPercents.value[index])
  } else if (colorPercents.value[index] > 0) {
    colorValues.value[index] = darken(colorDefValues[index], colorPercents.value[index])
  } else {
    colorValues.value[index] = colorDefValues[index]
  }
  // alpha
  const newColor = fade(colorValues.value[index], colorAlphas.value[index])
  colorValues.value[index] = newColor
}

const getClassName = index => {
  const colorName = colorNames.value[index]
  const percent = colorPercents.value[index]
  const alpha = colorAlphas.value[index]
  let percentStr = ''
  if (percent > 0) {
    percentStr = `--D${percent}`
  } else if (percent < 0) {
    percentStr = `--L${percent}`
  }
  let alphaStr = ''
  if (alpha !== 100) {
    alphaStr = `--T${alpha}`
  }
  return `${colorName}` + percentStr + alphaStr
}

const onL = index => {
  colorPercents.value[index] = Math.max(-100, colorPercents.value[index] - delta)
  updateColor(index)
}
const onD = index => {
  colorPercents.value[index] = Math.min(100, colorPercents.value[index] + delta)
  updateColor(index)
}
const onT = index => {
  colorAlphas.value[index] = Math.max(0, colorAlphas.value[index] - delta)
  updateColor(index)
}
const onR = index => {
  colorAlphas.value[index] = Math.min(100, colorAlphas.value[index] + delta)
  updateColor(index)
}
</script>

<template>
  <div class="row flexWrap-wrap space4 textSM fontNormal">
    <div
      v-for="(colorName, index) of colorNames"
      :key="index"
      class="w-200 h-60 border-2 borderSolid borderGray100 toCenter black relative"
      :style="{ 'background-color': colorValues[index], '-webkit-text-stroke': 'white 0.5px' }"
      @click="onClick(index)"
    >
      {{ getClassName(index) }}
      <div
        class="absolute left-2 top-2 square4 roundedTiny bgYellow500 white shadowSmall textXS toCenter cursorPointer--hover"
        @click="onL(index)"
      >L</div>
      <div
        class="absolute right-2 top-2 square4 roundedTiny bgYellow500 white shadowSmall textXS toCenter cursorPointer--hover"
        @click="onD(index)"
      >D</div>
      <div
        class="absolute left-2 bottom-2 square4 roundedTiny bgYellow500 white shadowSmall textXS toCenter cursorPointer--hover"
        @click="onT(index)"
      >T</div>
      <div
        class="absolute right-2 bottom-2 square4 roundedTiny bgYellow500 white shadowSmall textXS toCenter cursorPointer--hover"
        @click="onR(index)"
      >R</div>
    </div>
  </div>
</template>