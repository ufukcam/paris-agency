<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          {{ $t('tours.title') }}
        </h1>
        <p class="mt-4 text-xl text-gray-500">
          {{ $t('tours.description') }}
        </p>
      </div>

      <!-- Filters -->
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg transition-colors',
            selectedCategory === category
              ? 'bg-[#b8a77a] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-[#b8a77a] hover:text-white'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Tours Grid -->
      <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="tour in filteredTours"
          :key="tour.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="tour.image" :alt="tour.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-[#b8a77a]">{{ tour.category }}</span>
              <span class="text-sm text-gray-500">{{ tour.duration }}</span>
            </div>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">{{ tour.title }}</h3>
            <p class="mt-2 text-gray-500">{{ tour.description }}</p>
            <div class="mt-4 flex justify-between items-center">
              <span class="text-2xl font-bold text-[#b8a77a]">{{ tour.price }}</span>
              <NuxtLink
                to="first-tour"
                class="inline-block bg-[#b8a77a] text-white px-4 py-2 rounded-md hover:bg-[#a6956a]"
              >
                {{ $t('home.hero.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedCategory = ref('All')

const categories = ['All', 'City Tours', 'Cultural', 'Adventure', 'Food & Wine']

const tours = [
  {
    id: 1,
    title: 'Paris City Tour',
    description: 'Experience the magic of Paris with our guided city tour.',
    price: '€299',
    duration: '3 days',
    category: 'City Tours',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'French Riviera',
    description: 'Discover the beautiful beaches and charming towns of the French Riviera.',
    price: '€499',
    duration: '5 days',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Wine Tasting Tour',
    description: 'Visit the finest wineries in France and taste exquisite wines.',
    price: '€399',
    duration: '2 days',
    category: 'Food & Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Louvre Museum Tour',
    description: 'Explore the world\'s largest art museum with an expert guide.',
    price: '€199',
    duration: '1 day',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Eiffel Tower Experience',
    description: 'Skip the line and enjoy exclusive access to the Eiffel Tower.',
    price: '€149',
    duration: '1 day',
    category: 'City Tours',
    image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'French Cooking Class',
    description: 'Learn to cook authentic French cuisine with a master chef.',
    price: '€249',
    duration: '1 day',
    category: 'Food & Wine',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
]

const filteredTours = computed(() => {
  if (selectedCategory.value === 'All') {
    return tours
  }
  return tours.filter(tour => tour.category === selectedCategory.value)
})
</script> 