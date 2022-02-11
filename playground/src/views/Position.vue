<template>
  <div class="spaceY4">
    <h2>static</h2>
    <div class="relative square-160 bgBlue100">
      <div class="bgOrange400 square-100 static toCenter">
        static
      </div>
    </div>
    <h2>relative</h2>
    <div class="relative square-160 bgBlue100">
      relative
      <div class="bgBlue400--T20 square-80 absolute bottom-0 toCenter">
        absolute
      </div>
    </div>
    <h2>absolute</h2>
    <div class="relative square-160 bgBlue100">
      <div class="bgBlue400--T20 square-80 absolute bottom-0 toCenter">
        absolute
      </div>
    </div>
    <h2>fixed</h2>
    <div class="toCenter bgGreen300 shadow rounded-8 square-80 fixed bottom-10 zIndex-10000">
      fixed
    </div>
    <h2>sticky</h2>
    <div class="relative square-160 overflow-auto bgGray100 p4">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div class="toCenter bgYellow200 shadow rounded-8 square-80 sticky top-0">
        sticky
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a
        libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum
        quae eum fugit earum.
      </div>
    </div>
    <h2>position</h2>
    <div class="toCenter rounded-8 square-80 position-absolute">
      position
    </div>
  </div>
</template>