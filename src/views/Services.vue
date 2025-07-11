<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center mb-12">
        <router-link 
          to="/" 
          class="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
        >
          <ArrowLeft class="h-5 w-5 mr-2" />
          返回
        </router-link>
        <h1 class="text-4xl font-bold text-blue-900">Investment Advisory with a Global Edge</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <div class="flex items-center mb-4">
            <component :is="service.icon" class="h-10 w-10 text-yellow-500" />
            <h2 class="text-2xl font-semibold text-blue-900 ml-4">{{ service.title }}</h2>
          </div>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="(item, i) in service.items" :key="i" class="flex items-start">
              <span class="text-amber-600 mr-2">•</span>
              <span class="text-gray-600">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeft, Briefcase, Shield, Globe, Handshake } from 'lucide-vue-next'

export default {
  components: {
    ArrowLeft, Briefcase, Shield, Globe, Handshake
  },
  data() {
    return {
      services: [
        {
          icon: "Briefcase",
          title: "Investment Advisory & Strategy",
          description: "Cross-border structuring, risk assessments, and asset allocation insights",
          items: [
            "Cross-border structuring",
            "Risk & feasibility assessments",
            "Asset allocation insights"
          ]
        },
        {
          icon: "Shield",
          title: "Real Estate Investment & Development",
          description: "Premium residential & commercial offerings with full-cycle management",
          items: [
            "Premium residential & commercial offerings",
            "Legal review & transaction due diligence",
            "Full-cycle property management"
          ]
        },
        {
          icon: "Globe",
          title: "Project Marketing & Market Entry",
          description: "Branding, investor roadshows and market access solutions",
          items: [
            "Branding & investor roadshows",
            "Market access for China/MENA",
            "Digital & offline fundraising campaigns"
          ]
        },
        {
          icon: "Handshake",
          title: "Capital Connections & Partnerships",
          description: "Investor matchmaking and comprehensive setup support",
          items: [
            "Matchmaking (investors, funders, developers)",
            "Setup support: company, compliance, banking",
            "Network access: government, legal, finance"
          ]
        }
      ]
    }
  }
}
</script>
