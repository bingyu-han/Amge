<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <router-link to="/" class="text-2xl font-bold text-blue-900">
            AMEGA
          </router-link>
          <div class="hidden md:flex space-x-8">
            <router-link 
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-2 py-2 px-1 text-sm font-medium transition-colors"
              :class="{
                'text-blue-900 border-b-2 border-blue-900': $route.path === item.path,
                'text-gray-600 hover:text-blue-900': $route.path !== item.path
              }"
            >
              <component :is="item.icon" class="h-4 w-4" />
              {{ item.title }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
      <img 
        src="https://nocode.meituan.com/photo/search?keyword=dubai,skyline,luxury&width=1920&height=1080"
        alt="Hero Background"
        class="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
          <span class="font-medium">Where Visionaries Capitalize on Tomorrow</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          Amega | Connecting Global Capital with UAE Investment Opportunities
        </p>
        <div class="flex justify-center space-x-6">
          <router-link 
            to="/contact"
            class="bg-amber-600 text-white px-10 py-4 rounded-none text-lg font-medium hover:bg-amber-700 transition-colors duration-300 uppercase tracking-wider"
          >
            Book Consultation
          </router-link>
          <router-link 
            to="/contact"
            class="border border-white text-white px-10 py-4 rounded-none text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300 uppercase tracking-wider"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="py-28 px-6 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-light text-gray-900 mb-4 tracking-tight">About Amega</h2>
          <div class="w-24 h-0.5 bg-amber-600 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Amega is a premium investment advisory platform headquartered in Dubai, dedicated to connecting international capital with strategic investment opportunities in the UAE.
              We provide professional investment consulting, real estate and market entry services.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              As a bilingual, cross-disciplinary team, we specialize in real estate, cross-border investments and project development support,
              helping clients achieve their investment objectives in the UAE and broader Middle East region.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-for="item in aboutItems"
              :key="item.title"
              class="bg-gray-50 p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div class="flex items-center mb-4">
                <component :is="item.icon" class="h-12 w-12 text-amber-600 mr-4" />
                <h3 class="text-xl font-medium text-gray-900">{{ item.title }}</h3>
              </div>
              <p class="text-gray-600">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-28 bg-gray-50 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-light text-gray-900 mb-4 tracking-tight">Why Choose Us</h2>
          <div class="w-24 h-0.5 bg-amber-600 mx-auto"></div>
          <p class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Strategic Access · Professional Expertise · Lasting Value
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in whyChooseItems"
            :key="item.title"
            class="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all backdrop-blur-sm bg-opacity-80"
          >
            <h3 class="text-xl font-medium text-gray-900 mb-4 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-600">
              {{ item.title }}
            </h3>
            <p class="text-gray-600">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务区域 -->
    <section class="py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-light text-gray-900 mb-4 tracking-tight">Investment Advisory with a Global Edge</h2>
          <div class="w-24 h-0.5 bg-amber-600 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="service in services"
            :key="service.title"
            class="bg-gray-50 p-8 border border-gray-200 hover:shadow-lg transition-all group"
          >
            <div class="relative h-48 mb-6 overflow-hidden">
              <img 
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-200">
              {{ service.title }}
            </h3>
            <ul class="space-y-3">
              <li v-for="(item, i) in service.items" :key="i" class="flex items-start">
                <span class="text-amber-600 mr-2">•</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">AMEGA</h3>
            <p class="mb-4">
              Premium investment advisory platform connecting global capital with strategic opportunities in the UAE.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="item in navItems" :key="item.path">
                <router-link
                  :to="item.path"
                  class="hover:text-amber-400 transition-colors"
                >
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <address class="not-italic">
              <p class="mb-2">
                Office 201, Al Hawai Tower<br />
                Financial Centre, Sheikh Zayed Road<br />
                Dubai, United Arab Emirates
              </p>
              <p class="mb-2">Phone: +971 52 889 3216</p>
              <p>Email: info@amegagroup.co</p>
            </address>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Subscribe</h3>
            <form class="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                class="w-full px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                class="bg-amber-500 text-blue-900 px-4 py-2 rounded font-medium hover:bg-amber-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="border-t border-blue-700 mt-8 pt-8 text-center text-sm">
          <p>© {{ new Date().getFullYear() }} AMEGA Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Building, Shield, Star, Globe, ChevronRight } from 'lucide-vue-next'

export default {
  components: {
    Building, Shield, Star, Globe, ChevronRight
  },
  data() {
    return {
      navItems: [
        { title: "Home", path: "/", icon: "Home" },
        { title: "About Us", path: "/about", icon: "Info" },
        { title: "Services", path: "/services", icon: "Briefcase" },
        { title: "Projects", path: "/projects", icon: "Building" },
        { title: "Contact", path: "/contact", icon: "Phone" }
      ],
      aboutItems: [
        { icon: "Building", title: "Real Estate", desc: "Premium residential & commercial projects" },
        { icon: "Globe", title: "Cross-border", desc: "Connecting global capital" },
        { icon: "Shield", title: "Compliance", desc: "100% legal compliance" },
        { icon: "Star", title: "VIP Services", desc: "Customized solutions" }
      ],
      whyChooseItems: [
        { title: "Unrivaled Market Access", desc: "Access to off-market opportunities in UAE & MENA" },
        { title: "Bespoke Advisory", desc: "Tailored strategies based on investor goals" },
        { title: "Cross-Border Intelligence", desc: "UAE & Asia-Pacific -focused investment understanding" },
        { title: "One-Stop Execution", desc: "End-to-end transaction and compliance handling" },
        { title: "Trusted Network", desc: "Legal, financial, and government connections" },
        { title: "Results-Driven Culture", desc: "Long-term value creation and transparency" }
      ],
      services: [
        { 
          title: "Investment Advisory & Strategy", 
          items: [
            "Cross-border structuring",
            "Risk & feasibility assessments",
            "Asset allocation insights"
          ],
          image: "https://nocode.meituan.com/photo/search?keyword=financial,advisor,meeting&width=400&height=300"
        },
        { 
          title: "Real Estate Investment & Development", 
          items: [
            "Premium residential & commercial offerings",
            "Legal review & transaction due diligence",
            "Full-cycle property management"
          ],
          image: "https://nocode.meituan.com/photo/search?keyword=global,real,estate,investment&width=400&height=300"
        },
        { 
          title: "Project Marketing & Market Entry", 
          items: [
            "Branding & investor roadshows",
            "Market access for China/MENA",
            "Digital & offline fundraising campaigns"
          ],
          image: "https://nocode.meituan.com/photo/search?keyword=business,expansion,global&width=400&height=300"
        },
        { 
          title: "Capital Connections & Partnerships", 
          items: [
            "Matchmaking (investors, funders, developers)",
            "Setup support: company, compliance, banking",
            "Network access: government, legal, finance"
          ],
          image: "https://nocode.meituan.com/photo/search?keyword=investment,partnership,handshake&width=400&height=300"
        }
      ]
    }
  }
}
</script>
