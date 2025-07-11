const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-700 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ContactCard;
