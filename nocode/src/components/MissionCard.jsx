const MissionCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
    </div>
  );
};

export default MissionCard;
