<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          :src="tour.image"
          :alt="tour.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>
      
      <div class="relative container mx-auto px-4 z-10">
        <div class="max-w-4xl">
          <h1 class="text-5xl font-bold text-white mb-4">{{ tour.title }}</h1>
          <div class="flex items-center gap-4 text-white/90">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              {{ tour.location }}
            </span>
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              {{ tour.duration }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tour Details Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="prose max-w-none">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Tour Overview</h2>
              <p class="text-gray-600 mb-8">{{ tour.description }}</p>

              <h3 class="text-2xl font-semibold text-gray-900 mb-4">Highlights</h3>
              <ul class="space-y-3 mb-8">
                <li v-for="(highlight, index) in tour.highlights" :key="index" class="flex items-start">
                  <svg class="h-6 w-6 text-[#b8a77a] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>

              <h3 class="text-2xl font-semibold text-gray-900 mb-4">Itinerary</h3>
              <div class="space-y-6">
                <div v-for="(day, index) in tour.itinerary" :key="index" class="border-l-2 border-[#b8a77a] pl-4">
                  <h4 class="text-xl font-semibold text-gray-900 mb-2">Day {{ index + 1 }}</h4>
                  <p class="text-gray-600">{{ day }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Form -->
          <div class="lg:col-span-1">
            <div class="bg-gray-50 rounded-xl p-6 shadow-lg sticky top-6">
              <div class="text-center mb-6">
                <span class="text-3xl font-bold text-[#b8a77a]">{{ tour.price }}</span>
                <span class="text-gray-600">/ person</span>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                  <select
                    v-model="form.guests"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  >
                    <option v-for="n in 10" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    v-model="form.date"
                    type="date"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    v-model="form.requests"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-[#b8a77a] text-white px-6 py-3 rounded-lg hover:bg-[#a6956a] transition-colors duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '#imports'

const { t } = useI18n()

// Mock tour data - In real app, this would come from an API
const tour = {
  id: 1,
  title: 'Paris City Tour',
  location: 'Paris, France',
  duration: '3 Days',
  price: '€99',
  image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  description: 'Experience the magic of Paris with our guided city tour. Visit iconic landmarks, enjoy local cuisine, and immerse yourself in the rich culture of the City of Light.',
  highlights: [
    'Visit the Eiffel Tower and enjoy panoramic views of Paris',
    'Explore the Louvre Museum and see the Mona Lisa',
    'Take a Seine River cruise',
    'Visit Notre-Dame Cathedral',
    'Enjoy a traditional French dinner'
  ],
  itinerary: [
    'Arrival in Paris, check-in at hotel, evening Eiffel Tower visit',
    'Full day tour of Louvre Museum and Notre-Dame Cathedral',
    'Seine River cruise and shopping at Champs-Élysées'
  ]
}

const form = ref({
  name: '',
  email: '',
  phone: '',
  guests: 1,
  date: '',
  requests: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Here you would typically send the data to your backend
}
</script>

<style>
.prose {
  max-width: none;
}
</style> 