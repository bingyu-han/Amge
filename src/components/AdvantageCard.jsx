const AdvantageCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AdvantageCard;
