<template>
  <h2>flex, flexBasis, flexGrow, flexShrink</h2>
  <div class="flex square-300 bgBlue100">
    <div class="square-60 bgOrange300 flexBasis-100 flexGrow-2 flexShrink-1"></div>
    <div class="square-80 bgGreen300 flexBasis-0"></div>
  </div>
  <h2>flex-2, flex-1-0</h2>
  <div class="flex square-300 bgBlue100">
    <div class="square-60 bgOrange300 flex-2"></div>
    <div class="square-80 bgGreen300 flex-1-0"></div>
  </div>
  <h2>flex-2-1-0</h2>
  <div class="flex square-300 bgBlue100">
    <div class="square-60 bgOrange300 flex-2-1-0"></div>
    <div class="square-80 bgGreen300"></div>
  </div>
  <h2>flex-2-1-auto</h2>
  <div class="flex square-300 bgBlue100">
    <div class="square-60 bgOrange300 flex-2-1-auto"></div>
    <div class="square-80 bgGreen300"></div>
  </div>
  <h2>flex-1-2-100 3个属性且不为0时，自动替换flex-basis单位</h2>
  <div class="flex square-300 bgBlue100">
    <div class="square-60 bgOrange300 flex-1-2-100"></div>
    <div class="square-80 bgGreen300"></div>
  </div>
  <h2>flex-1-2-20p 3个属性且不为0时，自动替换flex-basis单位，后面带p代表百分比</h2>
  <div class="flex square-300 bgBlue100">
    <div class="square-60 bgOrange300 flex-1-2-20p"></div>
    <div class="square-80 bgGreen300"></div>
  </div>
  <h2>flexWrap</h2>
  <div class="flex flexWrap-wrap square-300 bgBlue100">
    <div class="square-60 bgOrange300"></div>
    <div class="square-80 bgGreen300"></div>
    <div class="square-100 bgPink300"></div>
    <div class="square-80 bgRed300"></div>
  </div>
</template>