<template>
  <div>
    <h2 class="title">Theme</h2>
    <div>点击粉色按钮切换主题</div>
    <div>原理是生成的样式前附加主题名的class名字 .dark .bgRed500 { ... }</div>
    <div>所以切换主题的实现方法是，给根元素附加一个主题名字的class名字，点击按钮时修改为不同的class名字</div>
    <div class="square-400 toCenter bgBlue100 bgRed500--dark">square-400 bgBlue100 bgRed500--dark</div>
  </div>
</template>