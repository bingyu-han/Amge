import { Mail, Phone, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-blue-900 overflow-hidden">
        <img 
          src="https://nocode.meituan.com/photo/search?keyword=dubai,office&width=1920&height=500" 
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 font-light">
            We're ready to answer your questions and provide professional consultation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center mb-8">
          <Link 
            to="/" 
            className="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">info@amegagroup.co</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+971 528893216</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Monday to Friday: 9:00 - 18:00 (GMT+4)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Send Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select...</option>
                  <option value="investment">Investment Consultation</option>
                  <option value="property">Real Estate Consultation</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-6 py-4 rounded-md hover:bg-amber-700 transition font-medium text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
