<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center mb-8">
        <router-link 
          to="/" 
          class="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
        >
          <ArrowLeft class="h-5 w-5 mr-2" />
          返回
        </router-link>
        <h1 class="text-4xl font-bold text-blue-900 flex items-center">
          <Building class="mr-4" /> 我们的项目
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in 6"
          :key="item"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=dubai,property&width=600&height=400"
            :alt="`项目 ${item}`"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-blue-900 mb-2">迪拜豪华公寓 {{ item }}</h3>
            <p class="text-gray-600 mb-4">位于迪拜核心商业区的高端住宅项目</p>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
              查看详情
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeft, Building } from 'lucide-vue-next'

export default {
  components: {
    ArrowLeft, Building
  }
}
</script>
