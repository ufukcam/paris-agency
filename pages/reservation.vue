<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="w-full max-w-4xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Rezervasyon
        </h1>
        <p class="text-gray-600">
          Unutulmaz bir Paris deneyimi için hemen rezervasyon yapın
        </p>
      </div>

      <!-- Progress Steps -->
      <div class="mb-12">
        <div class="flex items-center justify-between">
          <div v-for="(step, index) in steps" :key="index" 
               class="flex items-center">
            <div :class="[
              'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold',
              currentStep >= index ? 'bg-[#b8a77a] text-white' : 'bg-gray-200 text-gray-600'
            ]">
              {{ index + 1 }}
            </div>
            <div v-if="index < steps.length - 1" 
                 :class="[
                   'h-1 w-24 mx-2',
                   currentStep > index ? 'bg-[#b8a77a]' : 'bg-gray-200'
                 ]">
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <span v-for="(step, index) in steps" :key="index"
                :class="[
                  'text-sm',
                  currentStep >= index ? 'text-[#b8a77a] font-medium' : 'text-gray-500'
                ]">
            {{ step }}
          </span>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-lg p-8">
        <!-- Step 1: Tour Selection -->
        <div v-if="currentStep === 0">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Tur Seçimi</h2>
          <div class="space-y-4">
            <div v-for="tour in tours" :key="tour.id"
                 class="flex items-center p-4 border rounded-lg cursor-pointer hover:border-[#b8a77a] transition-colors"
                 :class="{ 'border-[#b8a77a] bg-[#b8a77a]/5': selectedTour === tour.id }"
                 @click="selectedTour = tour.id">
              <input type="radio" :value="tour.id" v-model="selectedTour" class="hidden">
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">{{ tour.name }}</h3>
                <p class="text-sm text-gray-600">{{ tour.description }}</p>
              </div>
              <div class="text-lg font-semibold text-[#b8a77a]">
                {{ tour.price }}
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Personal Information -->
        <div v-if="currentStep === 1">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Kişisel Bilgiler</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ad</label>
              <input type="text" v-model="formData.firstName" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
              <input type="text" v-model="formData.lastName" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
              <input type="email" v-model="formData.email" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
              <input type="tel" v-model="formData.phone" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
          </div>
        </div>

        <!-- Step 3: Date and Time -->
        <div v-if="currentStep === 2">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Tarih ve Saat</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tarih</label>
              <input type="date" v-model="formData.date" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Saat</label>
              <select v-model="formData.time" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
                <option value="">Saat seçin</option>
                <option v-for="time in availableTimes" :key="time" :value="time">
                  {{ time }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Kişi Sayısı</label>
              <input type="number" v-model="formData.guests" min="1" max="10" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
          </div>
        </div>

        <!-- Step 4: Payment -->
        <div v-if="currentStep === 3">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Ödeme Bilgileri</h2>
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Kart Üzerindeki İsim</label>
              <input type="text" v-model="formData.cardName" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Kart Numarası</label>
              <input type="text" v-model="formData.cardNumber" required
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
            </div>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Son Kullanma Tarihi</label>
                <input type="text" v-model="formData.expiryDate" placeholder="MM/YY" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input type="text" v-model="formData.cvv" required
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b8a77a] focus:border-[#b8a77a]">
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-8">
          <button v-if="currentStep > 0"
                  @click="currentStep--"
                  type="button"
                  class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Geri
          </button>
          <button v-if="currentStep < steps.length - 1"
                  @click="currentStep++"
                  type="button"
                  class="px-6 py-2 bg-[#b8a77a] text-white rounded-lg hover:bg-[#a6956a] ml-auto">
            İleri
          </button>
          <button v-else
                  type="submit"
                  class="px-6 py-2 bg-[#b8a77a] text-white rounded-lg hover:bg-[#a6956a] ml-auto">
            Rezervasyonu Tamamla
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const currentStep = ref(0)
const selectedTour = ref(null)

const steps = [
  'Tur Seçimi',
  'Kişisel Bilgiler',
  'Tarih ve Saat',
  'Ödeme'
]

const tours = [
  {
    id: 1,
    name: 'Paris Şehir Turu',
    description: 'Eiffel Kulesi, Louvre Müzesi ve daha fazlası',
    price: '€99'
  },
  {
    id: 2,
    name: 'Loire Vadisi Kaleleri',
    description: 'Fransa\'nın en güzel kalelerini keşfedin',
    price: '€149'
  },
  {
    id: 3,
    name: 'Versailles Sarayı',
    description: 'Kraliyet sarayını ve bahçelerini ziyaret edin',
    price: '€79'
  }
]

const availableTimes = [
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00'
]

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 1,
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: ''
})

const handleSubmit = () => {
  // Form gönderme işlemi burada yapılacak
  console.log('Form data:', formData.value)
  // Başarılı rezervasyon sonrası yönlendirme
  navigateTo('/reservation-success')
}
</script> 