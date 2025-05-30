<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="w-full max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p class="text-gray-600 mt-2">Tur ve rezervasyon yönetimi</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Toplam Tur</p>
              <p class="text-2xl font-semibold text-gray-900 mt-1">24</p>
            </div>
            <div class="p-3 bg-[#b8a77a]/10 rounded-lg">
              <i class="i-heroicons-map text-[#b8a77a] text-xl"></i>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Aktif Rezervasyon</p>
              <p class="text-2xl font-semibold text-gray-900 mt-1">156</p>
            </div>
            <div class="p-3 bg-[#b8a77a]/10 rounded-lg">
              <i class="i-heroicons-calendar text-[#b8a77a] text-xl"></i>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Toplam Gelir</p>
              <p class="text-2xl font-semibold text-gray-900 mt-1">€15,240</p>
            </div>
            <div class="p-3 bg-[#b8a77a]/10 rounded-lg">
              <i class="i-heroicons-currency-euro text-[#b8a77a] text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Tour Management Card -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-semibold text-gray-900">Tur Yönetimi</h2>
                <p class="text-gray-600 mt-1">Turları ekle, düzenle ve yönet</p>
              </div>
              <div class="p-3 bg-[#b8a77a]/10 rounded-lg">
                <i class="i-heroicons-map text-[#b8a77a] text-2xl"></i>
              </div>
            </div>
            <div class="space-y-4">
              <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center gap-3">
                  <i class="i-heroicons-plus-circle text-[#b8a77a] text-xl"></i>
                  <span class="font-medium text-gray-900">Yeni Tur Ekle</span>
                </div>
                <i class="i-heroicons-arrow-right text-gray-400"></i>
              </button>
              <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center gap-3">
                  <i class="i-heroicons-pencil-square text-[#b8a77a] text-xl"></i>
                  <span class="font-medium text-gray-900">Turları Düzenle</span>
                </div>
                <i class="i-heroicons-arrow-right text-gray-400"></i>
              </button>
              <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center gap-3">
                  <i class="i-heroicons-trash text-[#b8a77a] text-xl"></i>
                  <span class="font-medium text-gray-900">Turları Sil</span>
                </div>
                <i class="i-heroicons-arrow-right text-gray-400"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Reservations Card -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-semibold text-gray-900">Rezervasyonlar</h2>
                <p class="text-gray-600 mt-1">Rezervasyonları görüntüle ve yönet</p>
              </div>
              <div class="p-3 bg-[#b8a77a]/10 rounded-lg">
                <i class="i-heroicons-calendar text-[#b8a77a] text-2xl"></i>
              </div>
            </div>
            <div class="space-y-4">
              <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center gap-3">
                  <i class="i-heroicons-calendar-days text-[#b8a77a] text-xl"></i>
                  <span class="font-medium text-gray-900">Tüm Rezervasyonlar</span>
                </div>
                <i class="i-heroicons-arrow-right text-gray-400"></i>
              </button>
              <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center gap-3">
                  <i class="i-heroicons-clock text-[#b8a77a] text-xl"></i>
                  <span class="font-medium text-gray-900">Bekleyen Rezervasyonlar</span>
                </div>
                <i class="i-heroicons-arrow-right text-gray-400"></i>
              </button>
              <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="flex items-center gap-3">
                  <i class="i-heroicons-check-circle text-[#b8a77a] text-xl"></i>
                  <span class="font-medium text-gray-900">Onaylanan Rezervasyonlar</span>
                </div>
                <i class="i-heroicons-arrow-right text-gray-400"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// İstatistikler için örnek veriler
const stats = {
  totalTours: 24,
  activeReservations: 156,
  totalRevenue: '€15,240'
}
</script> 