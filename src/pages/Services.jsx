import { Briefcase, Shield, Globe, Handshake, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
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
          <h1 className="text-4xl font-bold text-blue-900">Investment Advisory with a Global Edge</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Briefcase className="h-10 w-10 text-yellow-500" />,
              title: "Investment Advisory & Strategy",
              description: "Cross-border structuring, risk assessments, and asset allocation insights",
              items: [
                "Cross-border structuring",
                "Risk & feasibility assessments",
                "Asset allocation insights"
              ]
            },
            {
              icon: <Shield className="h-10 w-10 text-yellow-500" />,
              title: "Real Estate Investment & Development",
              description: "Premium residential & commercial offerings with full-cycle management",
              items: [
                "Premium residential & commercial offerings",
                "Legal review & transaction due diligence",
                "Full-cycle property management"
              ]
            },
            {
              icon: <Globe className="h-10 w-10 text-yellow-500" />,
              title: "Project Marketing & Market Entry",
              description: "Branding, investor roadshows and market access solutions",
              items: [
                "Branding & investor roadshows",
                "Market access for China/MENA",
                "Digital & offline fundraising campaigns"
              ]
            },
            {
              icon: <Handshake className="h-10 w-10 text-yellow-500" />,
              title: "Capital Connections & Partnerships",
              description: "Investor matchmaking and comprehensive setup support",
              items: [
                "Matchmaking (investors, funders, developers)",
                "Setup support: company, compliance, banking",
                "Network access: government, legal, finance"
              ]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                {service.icon}
                <h2 className="text-2xl font-semibold text-blue-900 ml-4">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
