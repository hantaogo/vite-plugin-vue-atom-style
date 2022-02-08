<script setup lang="ts">
import { ref } from 'vue'
const green = ref(true)
</script>

<template>
  <div class="column toCenter bgBlue100">
    <div class="title text4XL pink300 w400 h200 bgGreen600 bgGreen600--L10--hover">标题</div>
    <div :class="['shadowLg', 'text3XL', green ? 'bgGray400' : 'bgRed500', 'square300', 'bgPink300--hover', 'p10']" @click="green = !green">Hello vue-atom-style.</div>
    <input class="w200 h50 bgBlue300 bgBlue300--D20--active" value="你好"/>
  </div>
</template>
