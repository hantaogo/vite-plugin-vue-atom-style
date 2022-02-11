<script setup>
import { ref } from 'vue'
const green = ref(true)
</script>

<template>
  <div class="column toCenter bgBlue100">
    <div class="title text4XL pink300 w-100 h-50 bgGreen600 bgGreen600--L10--hover p-4p">标题</div>
    <div :class="['shadowLg', 'text3XL', green ? 'bgGray400' : 'bgRed500', 'square-200', 'bgPink300--hover',]" @click="green = !green">Hello vue-atom-style.</div>
    <input class="w-80 h-40 bgBlue300 bgBlue300--D20--active m-8 pr4" value="你好"/>
  </div>
</template>
