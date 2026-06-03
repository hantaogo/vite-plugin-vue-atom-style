<script setup>
import { ref } from 'vue'
import { routes } from '../routes/routes'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref(routes.filter(t => t.path !== '/').map(t => t.path.replace('/', '')).sort())

const go = path => {
  router.push(path)
}
</script>

<template>
  <div class="grid gridTemplateColumns-3 gap4">
    <div v-for="(item, index) of items" :key="index" class="button w-100p" @click="go(item)">{{ item }}</div>
  </div>
</template>
