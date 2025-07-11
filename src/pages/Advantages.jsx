import { Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Advantages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 浅色背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center mb-12">
          <Link 
            to="/" 
            className="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回
          </Link>
          <h1 className="text-4xl font-bold text-blue-900">核心优势</h1>
        </div>

        {/* 标题区域 */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-light text-gray-800 mb-6">
            Strategic Access. Proven Expertise. Enduring Value.
          </h2>
          <div className="w-32 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* 优势列表 */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Unrivaled Market Access – Access to off-market opportunities in UAE & MENA",
                "Bespoke Advisory – Tailored strategies based on investor goals",
                "Cross-Border Intelligence – UAE & Asia-Pacific -focused investment understanding"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-xl text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                "One-Stop Execution – End-to-end transaction and compliance handling",
                "Trusted Network – Legal, financial, and government connections",
                "Results-Driven Culture – Long-term value creation and transparency"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-xl text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-2xl text-gray-600 leading-relaxed">
            Our team combines deep local market knowledge with international investment expertise to deliver exceptional results for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
