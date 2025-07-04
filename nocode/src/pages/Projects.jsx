import { Building2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link 
            to="/" 
            className="mr-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 flex items-center">
            <Building2 className="mr-4" /> 我们的项目
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={`https://nocode.meituan.com/photo/search?keyword=dubai,property&width=600&height=400`}
                alt={`项目 ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">迪拜豪华公寓 {item}</h3>
                <p className="text-gray-600 mb-4">位于迪拜核心商业区的高端住宅项目</p>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
