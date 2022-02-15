<template>
  <div class="spaceY4">
    <h2>animateSpin</h2>
    <div class="animateSpin square20 roundedHuge bgGradientX-red400-orange400"></div>
    <h2>animatePing</h2>
    <div class="flex square3 relative">
      <div class="animatePing absolute inlineFlex w-100p h-100p roundedFull bgGreen400"></div>
      <div class="relative inlineFlex roundedFull square3 bgGreen500"></div>
    </div>
    <h2>animatePulse</h2>
    <div class="animatePulse border borderBlue300 shadow roundedMedium p4 w-100p mx-auto">
      <div class="flex spaceX4">
        <div class="roundedFull bgBlue400 h12 w12"></div>
        <div class="flex-1 spaceY4 py1">
          <div class="h4 bgBlue400 rounded"></div>
          <div class="spaceY2">
            <div class="h4 bgBlue400 rounded"></div>
            <div class="h4 bgBlue400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <h2>animateBounce</h2>
    <div class="py10">
      <div class="circle20 bgOrange400 animateBounce"></div>
    </div>
  </div>
</template>

<style>
.animatePing { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
@keyframes ping {
  75%, 100% {transform: scale(2);opacity: 0;}
}
</style>