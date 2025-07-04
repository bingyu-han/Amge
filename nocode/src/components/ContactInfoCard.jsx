const ContactInfoCard = ({ icon, title, content }) => {
  return (
    <div className="bg-white p-8 flex flex-col items-center text-center">
      <div className="bg-blue-900 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default ContactInfoCard;
