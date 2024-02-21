<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'

import TempHeader from '@/components/template/globals/TempHeader.vue'
import TempFooter from '@/components/template/globals/TempFooter.vue'
import MainTodos from '@/components/template/todos/TempMainTodos.vue'
import AppContainer from '@/components/app/AppContainer.vue'
import AppButton from '@/components/app/AppButton.vue'

const toggleSearch = ref<boolean>(false)
provide('toggleSearch', { toggleSearch })

const weather = ref<string>('')
const fetchCurrentWeather = async () => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=-6.338245334410893&longitude=106.92688183226457&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  )
  const data = await res.json()
  weather.value = `${data.current.temperature_2m}${data.current_units.temperature_2m} Bekasi`
}

onMounted(async () => fetchCurrentWeather())
</script>

<template>
  <AppContainer class="flex flex-col gap-4 pt-16">
    <TempHeader>
      <AppButton variant="secondary" size="sm" @click="toggleSearch = !toggleSearch">
        <VIcon v-if="!toggleSearch" name="hi-search" />
        <VIcon v-else name="bi-x-lg" fill="#fd2020" />
      </AppButton>
    </TempHeader>
    <MainTodos />
    <TempFooter>
      <p class="text-sm font-medium text-gray-500">Made with ❤ {{ weather }}</p>
    </TempFooter>
  </AppContainer>
</template>
