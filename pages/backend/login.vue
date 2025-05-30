<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Left Side - Image -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#b8a77a] relative">
      <div class="absolute inset-0 bg-black/20"></div>
      <img
        src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paris"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-3xl font-bold mb-2">Paris Agency</h1>
          <p class="text-sm opacity-90">Yönetim Paneline Hoş Geldiniz</p>
        </div>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-4">
      <div class="w-full max-w-sm">
        <!-- Logo for Mobile -->
        <div class="lg:hidden text-center mb-4">
          <h1 class="text-2xl font-bold text-[#b8a77a]">Paris Agency</h1>
        </div>

        <!-- Login Form -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Giriş Yap</h2>
          
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="i-heroicons-envelope text-gray-400 text-sm"></i>
                </div>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Şifre
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="i-heroicons-lock-closed text-gray-400 text-sm"></i>
                </div>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="form.password"
                  required
                  class="w-full pl-8 pr-8 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#b8a77a] focus:border-[#b8a77a]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <i :class="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" class="text-gray-400 text-sm"></i>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  v-model="form.remember"
                  class="h-3.5 w-3.5 text-[#b8a77a] focus:ring-[#b8a77a] border-gray-300 rounded"
                />
                <label class="ml-2 text-gray-600">
                  Beni hatırla
                </label>
              </div>
              <a href="#" class="text-[#b8a77a] hover:text-[#a6956a]">
                Şifremi unuttum
              </a>
            </div>

            <button
              type="submit"
              class="w-full bg-[#b8a77a] text-white py-1.5 px-4 rounded-md hover:bg-[#a6956a] transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <span>Giriş Yap</span>
              <i class="i-heroicons-arrow-right text-sm"></i>
            </button>
          </form>

          <!-- Divider -->
          <div class="relative my-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-2 bg-white text-gray-500">veya</span>
            </div>
          </div>

          <!-- Social Login -->
          <div class="grid grid-cols-2 gap-3">
            <button class="flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
              <i class="i-mdi-google text-red-500"></i>
              <span class="text-gray-700">Google</span>
            </button>
            <button class="flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
              <i class="i-mdi-microsoft text-blue-500"></i>
              <span class="text-gray-700">Microsoft</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  email: '',
  password: '',
  remember: false
})

const showPassword = ref(false)

const handleLogin = () => {
  // Login işlemleri burada yapılacak
  console.log('Login form:', form.value)
  // Başarılı login sonrası yönlendirme
  navigateTo('/backend')
}
</script> 