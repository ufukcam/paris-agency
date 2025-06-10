<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
    >
      <img
        src="https://flagcdn.com/w40/tr.png"
        alt="TR"
        class="w-5 h-5 rounded-sm object-cover"
      />
      <span>Türkçe</span>
      <i class="i-heroicons-chevron-down text-gray-400 text-xs"></i>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50"
    >
      <a
        v-for="lang in languages"
        :key="lang.code"
        :href="`#${lang.code}`"
        class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <img
          :src="lang.flag"
          :alt="lang.name"
          class="w-5 h-5 rounded-sm object-cover"
        />
        <span>{{ lang.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const languages = [
  {
    code: 'TR',
    name: 'Türkçe',
    flag: 'https://flagcdn.com/w40/tr.png'
  },
  {
    code: 'EN',
    name: 'English',
    flag: 'https://flagcdn.com/w40/gb.png'
  },
  {
    code: 'FR',
    name: 'Français',
    flag: 'https://flagcdn.com/w40/fr.png'
  },
  {
    code: 'DE',
    name: 'Deutsch',
    flag: 'https://flagcdn.com/w40/de.png'
  }
]

</script> 