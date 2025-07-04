<template>
  <div class="min-h-screen bg-gray-50">
    <section class="relative h-96 flex items-center justify-center bg-blue-900 overflow-hidden">
      <img 
        src="https://nocode.meituan.com/photo/search?keyword=dubai,office&width=1920&height=500" 
        alt="Contact Background"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p class="text-xl text-gray-200 font-light">
          We're ready to answer your questions and provide professional consultation
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex items-center mb-8">
        <router-link 
          to="/" 
          class="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
        >
          <ArrowLeft class="h-5 w-5 mr-2" />
          Back to Home
        </router-link>
      </div>

      <div class="flex flex-col space-y-8 max-w-2xl mx-auto">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <Mail class="h-6 w-6 text-amber-600 mt-1 mr-4" />
              <div>
                <h3 class="text-lg font-medium text-gray-800">Email</h3>
                <p class="text-gray-600">info@amegagroup.co</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <Phone class="h-6 w-6 text-amber-600 mt-1 mr-4" />
              <div>
                <h3 class="text-lg font-medium text-gray-800">Phone</h3>
                <p class="text-gray-600">+971 528893216</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <Clock class="h-6 w-6 text-amber-600 mt-1 mr-4" />
              <div>
                <h3 class="text-lg font-medium text-gray-800">Working Hours</h3>
                <p class="text-gray-600">Monday to Friday: 9:00 - 18:00 (GMT+4)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-900 mb-6">Send Message</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                id="subject"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="">Select...</option>
                <option value="investment">Investment Consultation</option>
                <option value="property">Real Estate Consultation</option>
                <option value="partnership">Business Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                id="message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-amber-600 text-white px-6 py-4 rounded-md hover:bg-amber-700 transition font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeft, Mail, Phone, Clock } from 'lucide-vue-next'

export default {
  components: {
    ArrowLeft, Mail, Phone, Clock
  }
}
</script>
