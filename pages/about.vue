<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-[#b8a77a] py-16">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          class="w-full h-full object-cover opacity-20"
          alt="Team"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ $t('about.title') }}
        </h1>
        <p class="mt-6 text-xl text-white max-w-3xl">
          {{ $t('about.description') }}
        </p>
      </div>
    </div>

    <!-- Team Section -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
        <p class="mt-4 text-lg text-gray-500">
          Meet the passionate people behind our success
        </p>
      </div>

      <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="member in teamMembers" :key="member.name" class="text-center">
          <img
            :src="member.image"
            :alt="member.name"
            class="mx-auto h-40 w-40 rounded-full object-cover"
          />
          <h3 class="mt-6 text-xl font-semibold text-gray-900">{{ member.name }}</h3>
          <p class="text-gray-500">{{ member.role }}</p>
          <p class="mt-2 text-gray-500">{{ member.description }}</p>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
        </div>

        <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="value in values" :key="value.title" class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900">{{ value.title }}</h3>
            <p class="mt-2 text-gray-500">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    description: 'With over 15 years of experience in the travel industry.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Travel Consultant',
    description: 'Expert in European destinations and cultural tours.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Emma Wilson',
    role: 'Customer Relations',
    description: 'Dedicated to ensuring the best experience for our clients.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
]

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service.'
  },
  {
    title: 'Customer Focus',
    description: 'Our clients satisfaction is our top priority.'
  },
  {
    title: 'Innovation',
    description: 'We continuously innovate to provide unique travel experiences.'
  }
]
</script> 