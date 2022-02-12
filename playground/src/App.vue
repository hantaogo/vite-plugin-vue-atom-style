<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

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
    <div class="row toBetween m4">
      <div class="button bgGreen500 h-40" @click="goHome">Home</div>
      <div class="button bgPink300 h-40" @click="changeTheme">{{ theme === 'light' ? 'Dark mode' : 'Light mode' }}</div>
    </div>
    <div class="m4">
      <router-view></router-view>
    </div>
  </div>
</template>
