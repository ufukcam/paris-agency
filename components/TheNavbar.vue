<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
            Paris Agency
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg 
              v-if="!isOpen"
              class="block h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open -->
            <svg 
              v-else
              class="block h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex items-center gap-4">
          <LanguageSelect />
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isOpen" 
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          @click="isOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const menuItems = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'Turlar', path: '/tours' },
  { name: 'Rezervasyon', path: '/reservation' },
  { name: 'İletişim', path: '/contact' }
]
</script> 