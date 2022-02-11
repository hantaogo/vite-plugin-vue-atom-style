<template>
  <div class="spaceY4">
    <h2>block</h2>
    <div class="spaceY-10">
      <div class="bgOrange400 rounded-8 h-60 block"></div>
      <div class="bgOrange400 rounded-8 h-60 block"></div>
      <div class="bgOrange400 rounded-8 h-60 block"></div>
    </div>
    <h2>inline</h2>
    <div class="white spaceX2">
      <div class="bgOrange400 rounded-8 p4 inline">
        A
      </div>
      <div class="bgOrange400 rounded-8 p4 inline">
        B
      </div>
      <div class="bgOrange400 rounded-8 p4 inline">
        C
      </div>
    </div>
    <h2>inlineBlock</h2>
    <div class="white spaceX2">
      <div class="bgOrange400 rounded-8 p4 inlineBlock">
        A
      </div>
      <div class="bgOrange400 rounded-8 p4 inlineBlock">
        B
      </div>
      <div class="bgOrange400 rounded-8 p4 inlineBlock">
        C
      </div>
    </div>
    <h2>flex</h2>
    <div class="spaceY2">
      <div class="white spaceX2 flex bgOrange100 p4">
        <div class="bgOrange400 rounded-8 p4">
          A
        </div>
        <div class="bgOrange400 rounded-8 p4">
          B
        </div>
        <div class="bgOrange400 rounded-8 p4">
          C
        </div>
      </div>
      <div class="white spaceX2 flex bgOrange100 p4">
        <div class="bgOrange400 rounded-8 p4">
          A
        </div>
        <div class="bgOrange400 rounded-8 p4">
          B
        </div>
        <div class="bgOrange400 rounded-8 p4">
          C
        </div>
      </div>
    </div>
    <h2>inlineFlex</h2>
    <div class="spaceX2">
      <div class="white spaceX2 inlineFlex bgOrange100 p4">
        <div class="bgOrange400 rounded-8 p4">
          A
        </div>
        <div class="bgOrange400 rounded-8 p4">
          B
        </div>
        <div class="bgOrange400 rounded-8 p4">
          C
        </div>
      </div>
      <div class="white spaceX2 inlineFlex bgOrange100 p4">
        <div class="bgOrange400 rounded-8 p4">
          A
        </div>
        <div class="bgOrange400 rounded-8 p4">
          B
        </div>
        <div class="bgOrange400 rounded-8 p4">
          C
        </div>
      </div>
    </div>
    <h2>grid</h2>
    <div class="grid gridTemplateColumns-3 gap-20 white fontBold textXL">
      <div class="py1 rounded-4 toCenter bgOrange400">
        1
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        2
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        3
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        4
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        5
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        6
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        7
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        8
      </div>
      <div class="py1 rounded-4 toCenter bgOrange400">
        9
      </div>
    </div>
    <h2>hidden</h2>
    <div class="white spaceX2">
      <div class="bgOrange400 rounded-8 p4 hidden">
        A
      </div>
      <div class="bgOrange400 rounded-8 p4 inlineBlock">
        B
      </div>
      <div class="bgOrange400 rounded-8 p4 inlineBlock">
        C
      </div>
    </div>
    <h2>display</h2>
    <div class="spaceY-10">
      <div class="bgOrange400 rounded-8 square-100 display-inline-grid"></div>
      <div class="bgOrange400 rounded-8 square-100 display-table"></div>
    </div>
  </div>
</template>