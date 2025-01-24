<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dashboardService from '../services'
import { type CatFact } from '../utils/types'
import HelloWorld from '../components/HelloWorld.vue'

const catFacts = ref<CatFact[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const fetchCatFacts = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await dashboardService.getCatFacts({})
    catFacts.value = response.data
  } catch (e) {
    error.value = 'Failed to fetch cat facts'
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCatFacts()
})
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
