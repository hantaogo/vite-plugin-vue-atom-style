<script setup>
import { ref } from 'vue'

const theme = ref('light')

const changeTheme = () => {
  if (theme.value === 'dark') {
    theme.value = 'light'
  } else {
    theme.value = 'dark'
  }
}

</script>

<template>
  <div :class="theme">
    <h2 class="title">Theme {{ theme }}</h2>
    <div class="square-400 toCenter bgBlue100 bgRed500--dark" @click="changeTheme">square-400 bgBlue100 bgRed500--dark</div>
  </div>
</template>