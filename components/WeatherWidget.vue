<template>
  <div class="flex gap-4">
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-lg">
      <div class="flex items-center gap-4">
        <div class="text-4xl">
          {{ weather.temperature }}&deg;C
        </div>
        <div class="flex-1">
          <div class="font-medium">{{ weather.description }}</div>
          <div class="text-sm opacity-80">{{ weather.city }}</div>
        </div>
        <div class="text-3xl">
          <i :class="weatherIcon"></i>
        </div>
      </div>
    </div>

    <a href="https://wa.me/33600000000" 
       target="_blank" 
       class="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
      <div class="text-3xl">
        <i class="i-mdi-whatsapp"></i>
      </div>
      <div>
        <div class="font-medium">WhatsApp</div>
        <div class="text-sm opacity-80">Bize Ulaşın</div>
      </div>
    </a>
  </div>
</template>

<script setup>
const weather = ref({
  temperature: 22,
  description: 'Güneşli',
  main: 'Clear',
  city: 'Paris'
})

const weatherIcon = computed(() => {
  const icons = {
    'Clear': 'i-heroicons-sun',
    'Clouds': 'i-heroicons-cloud',
    'Rain': 'i-heroicons-cloud-rain',
    'Snow': 'i-heroicons-cloud-snow',
    'Thunderstorm': 'i-heroicons-bolt',
    'Drizzle': 'i-heroicons-cloud-drizzle',
    'Mist': 'i-heroicons-cloud-fog'
  }
  
  return icons[weather.value.main] || 'i-heroicons-cloud'
})
</script> 