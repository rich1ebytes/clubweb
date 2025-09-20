import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {
  const truncatedDescription = club.description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Link to={club.link} className="w-full max-w-[600px] my-6">
      <div
        className="
          w-full h-auto
          bg-white rounded-lg shadow-xl overflow-hidden
          flex flex-col md:flex-row
          transform transition-transform duration-300
          hover:shadow-2xl hover:scale-105
        "
      >
        <div className="flex-none w-40 h-40 md:w-48 md:h-48 mx-auto p-4">
          <img
            className="w-full h-full object-cover"
            src={club.imageUrl}
            alt={`${club.name} logo`}
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">
            {club.name}
          </h2>
          <p className="text-sm md:text-base text-brand-secondary font-semibold italic mb-4">
            {club.tagline}
          </p>
          <p className="text-xs md:text-sm text-brand-secondary leading-relaxed">
            {truncatedDescription}
          </p>
          <Link
            to={club.link}
            className="mt-2 text-sm text-brand-accent hover:text-brand-secondary font-semibold transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Read More
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ClubCard;