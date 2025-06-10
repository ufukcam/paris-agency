<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Paris"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
      
      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            {{ $t('home.hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              
              class="inline-flex items-center px-8 py-4 bg-[#b8a77a] text-white rounded-lg hover:bg-[#a6956a] transition-all duration-300 transform hover:scale-105"
            >
              {{ $t('home.hero.cta') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <WeatherWidget class="mt-4 sm:mt-0" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Tours Section -->
    <section class="py-24 bg-gray-50">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ $t('home.featured.title') }}</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ $t('home.featured.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="tour in featuredTours" :key="tour.id" 
               class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="relative">
              <img :src="tour.image" :alt="tour.title" class="w-full h-64 object-cover">
              <div class="absolute top-4 right-4 bg-[#b8a77a] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {{ tour.price }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">{{ tour.title }}</h3>
              <p class="text-gray-600 mb-6">{{ tour.description }}</p>
              <NuxtLink
                class="inline-flex items-center justify-center w-full bg-[#b8a77a] text-white px-6 py-3 rounded-lg hover:bg-[#a6956a] transition-colors"
              >
                {{ $t('home.hero.cta') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reasons Section -->
    <TheReasons />

    <!-- CTA Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Paris View"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Unutulmaz Bir Paris Deneyimi İçin
          </h2>
          <p class="text-xl text-gray-200 mb-10">
            Özel turlarımız ve profesyonel rehberlerimizle Paris'in büyülü atmosferini keşfedin. Hemen rezervasyon yapın, size özel deneyimi yaşayın.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/reservation"
              class="inline-flex items-center justify-center px-8 py-4 bg-[#b8a77a] text-white rounded-lg hover:bg-[#a6956a] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Rezervasyon Yap
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/tours"
              class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Turları İncele
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
          <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-[#b8a77a] mb-2">500+</div>
              <div class="text-gray-300">Mutlu Müşteri</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[#b8a77a] mb-2">50+</div>
              <div class="text-gray-300">Özel Tur</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[#b8a77a] mb-2">100%</div>
              <div class="text-gray-300">Müşteri Memnuniyeti</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[#b8a77a] mb-2">24/7</div>
              <div class="text-gray-300">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'


const featuredTours = [
  {
    id: 1,
    title: 'Paris City Tour',
    description: 'Experience the magic of Paris with our guided city tour.',
    price: '€99',
    image: 'https://dynamic-media.tacdn.com/media/photo-o/2e/ae/d3/a6/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 2,
    title: 'Loire Valley Castles',
    description: 'Visit the magnificent castles of the Loire Valley.',
    price: '€149',
    image: 'https://dynamic-media.tacdn.com/media/photo-o/2e/ae/d3/a6/caption.jpg?w=800&h=600&s=1'
  },
  {
    id: 3,
    title: 'French Riviera',
    description: 'Discover the beautiful beaches and towns of the French Riviera.',
    price: '€199',
    image: 'https://dynamic-media.tacdn.com/media/photo-o/2e/ae/d3/a6/caption.jpg?w=800&h=600&s=1'
  }
]
</script> 