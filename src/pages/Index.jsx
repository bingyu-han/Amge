import { Building, Shield, Star, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const images = [
    "https://s3plus.sankuai.com/nocode-external/nocode_image/default/WPS%E5%9B%BE%E7%89%87%281%29-9oaf10hlypgxwc6u7dzcqb5ppvw7gq.jpg"
  ];

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section with parallax effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"
          style={{ y: yBg }}
        ></motion.div>
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Hero Background"
            className={`absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000 ${index === currentImage ? 'opacity-70' : 'opacity-0'}`}
            style={{ y: yBg }}
          />
        ))}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-medium">Where Visionaries Capitalize on Tomorrow</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Amega | Connecting Global Capital with UAE Investment Opportunities
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact"
              className="bg-amber-600 text-white px-10 py-4 rounded-none text-lg font-medium hover:bg-amber-700 transition-colors duration-300 uppercase tracking-wider"
            >
              Book Consultation
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white px-10 py-4 rounded-none text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300 uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section with enhanced visuals */}
      <section 
        className="py-28 px-6 bg-white relative overflow-hidden"
        ref={aboutRef}
      >
        <div className="absolute inset-0 bg-[url('https://nocode.meituan.com/photo/search?keyword=abstract,pattern&width=1920&height=1080')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">About Amega</h2>
            <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Amega is a premium investment advisory platform headquartered in Dubai, dedicated to connecting international capital with strategic investment opportunities in the UAE.
                We provide professional investment consulting, real estate and market entry services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a bilingual, cross-disciplinary team, we specialize in real estate, cross-border investments and project development support,
                helping clients achieve their investment objectives in the UAE and broader Middle East region.
              </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { icon: <Building className="h-12 w-12" />, title: "Real Estate", desc: "Premium residential & commercial projects" },
                { icon: <Globe className="h-12 w-12" />, title: "Cross-border", desc: "Connecting global capital" },
                { icon: <Shield className="h-12 w-12" />, title: "Compliance", desc: "100% legal compliance" },
                { icon: <Star className="h-12 w-12" />, title: "VIP Services", desc: "Customized solutions" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-6 border border-gray-200 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-amber-600 mr-4">{item.icon}</div>
                    <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with parallax effect */}
      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: yBg }}
        >
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=dubai,business,blur&width=1920&height=1080" 
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">Why Choose Us</h2>
            <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Strategic Access · Professional Expertise · Lasting Value
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Unrivaled Market Access", desc: "Access to off-market opportunities in UAE & MENA" },
              { title: "Bespoke Advisory", desc: "Tailored strategies based on investor goals" },
              { title: "Cross-Border Intelligence", desc: "UAE & Asia-Pacific -focused investment understanding" },
              { title: "One-Stop Execution", desc: "End-to-end transaction and compliance handling" },
              { title: "Trusted Network", desc: "Legal, financial, and government connections" },
              { title: "Results-Driven Culture", desc: "Long-term value creation and transparency" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all backdrop-blur-sm bg-opacity-80"
                initial={{ opacity: 0, y: 50 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-medium text-gray-900 mb-4 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with image cards */}
      <section 
        className="py-28 bg-white"
        ref={servicesRef}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">Investment Advisory with a Global Edge</h2>
            <div className="w-24 h-0.5 bg-amber-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-8 border border-gray-200 hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="relative h-48 mb-6 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
