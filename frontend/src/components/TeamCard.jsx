const TeamCard = ({ name, title, tagline, image, instagram }) => {
  return (
    <div
      className="bg-brand-nav rounded-xl shadow-lg p-6 flex flex-col items-center
     text-center transform hover:scale-105 transition-transform duration-300"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-brand-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-brand-offwhite">{name}</h3>
      <p className="text-l font-semibold text-brand-offwhite2 mb-1">{title}</p>
      <p className="text-sm italic text-brand-offwhite2 mb-4">{tagline}</p>
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-accent text-white py-2 px-4 rounded-full font-bold hover:bg-white hover:text-brand-accent transition-colors duration-200"
        >
          !nstagram
        </a>
      )}
    </div>
  );
};

export default TeamCard;
