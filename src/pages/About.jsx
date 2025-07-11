import { Landmark, Users, Award, MapPin, ArrowLeft, Eye, Target, Handshake, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <Link 
            to="/" 
            className="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回
          </Link>
          <h1 className="text-4xl font-bold text-blue-900">关于我们</h1>
        </div>
        
        {/* 公司简介 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Amega | Connecting Global Capital to UAE Opportunities</h2>
            <p className="text-gray-700 mb-6">
              Amega is a premium investment advisory platform bridging international capital with strategic opportunities in the UAE. We deliver high-end, professional, and multi-faceted investment consulting, real estate, and market entry services.
            </p>
            <p className="text-gray-700">
              Amega LLC is a Dubai-based investment consultancy firm committed to connecting global investors with strategic opportunities across the UAE and the broader Middle East. With a bilingual and cross-disciplinary team, we specialize in real estate, cross-border investments, and project development support.
            </p>
          </div>
          <div>
            <img 
              src="https://nocode.meituan.com/photo/search?keyword=dubai,business,meeting&width=800&height=500" 
              alt="Amega LLC团队"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 愿景与使命 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-amber-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the most trusted investment advisory firm in the Middle East, providing exceptional investment opportunities and professional consulting services for global investors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-amber-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To connect global capital with strategic investment opportunities in the Middle East, providing professional investment advisory and localized support services for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* 核心价值观 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Handshake className="h-8 w-8" />, 
                title: "Integrity", 
                description: "Upholding the highest standards of business ethics and transparency" 
              },
              { 
                icon: <Users className="h-8 w-8" />, 
                title: "Professionalism", 
                description: "Providing expert advice based on deep market insights" 
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Innovation", 
                description: "Continuously exploring new investment opportunities and solutions" 
              },
              { 
                icon: <Award className="h-8 w-8" />, 
                title: "Win-Win", 
                description: "Committed to creating long-term value for our clients" 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-3">
                  <div className="text-amber-600 mr-3">{item.icon}</div>
                  <h3 className="text-lg font-medium text-blue-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
