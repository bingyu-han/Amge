import { Target, Globe, Shield, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
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
          <h1 className="text-4xl font-bold text-blue-900">公司使命</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Target className="h-12 w-12 text-amber-600" />,
              title: "愿景",
              description: "成为中东地区最值得信赖的房地产投资机构"
            },
            {
              icon: <Globe className="h-12 w-12 text-amber-600" />,
              title: "使命",
              description: "连接全球资本与中东优质房地产项目"
            },
            {
              icon: <Shield className="h-12 w-12 text-amber-600" />,
              title: "价值观",
              description: "诚信、专业、创新、共赢"
            },
            {
              icon: <Star className="h-12 w-12 text-amber-600" />,
              title: "目标",
              description: "为客户创造长期稳定的投资回报"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
