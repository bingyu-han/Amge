const ServiceCard = ({ title, items }) => {
  return (
    <div className="bg-gray-50 p-8 border border-gray-200 hover:border-amber-600 transition-colors duration-300">
      <h3 className="text-2xl font-light text-blue-900 mb-6 pb-4 border-b border-gray-200">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
