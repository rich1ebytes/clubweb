import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventCard = ({ event, refresh, onEdit, onDelete }) => {
  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleDeleteClick = () => {
    if (onDelete) onDelete();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 border-2 border-transparent hover:border-brand-accent transition-all duration-300"
    >
      <Link
        to={`/events/${event._id}`}
        key={event._id}
        className="w-full flex flex-col items-center"
      >
        {event.eventImage && (
          <img
            src={event.eventImage}
            alt={event.eventName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <h3 className="text-2xl font-semibold text-brand-primary text-center">
          {event.eventName}
        </h3>
        <p className="text-gray-600 text-center mt-2">{event.eventDate}</p>
        <p className="text-gray-500 text-center text-sm">{event.eventVenue}</p>
      </Link>

      <div className="flex space-x-2 mt-4">
        {/* Details Button */}
        <Link
          to={`/events/${event._id}`}
         className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold transition lg:ml-4 py-2 px-4 rounded-full bg-brand-accent hover:bg-white hover:text-brand-accent border-2 border-transparent hover:border-brand-accent duration-300"
          >
          Details
        </Link>

        {/* Register Button */}
        {event.eventFormUrl && (
          <a
            href={event.eventFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold transition lg:ml-4 py-2 px-4 rounded-full bg-brand-accent hover:bg-white hover:text-brand-accent border-2 border-transparent hover:border-brand-accent duration-300"
          >
            Register
          </a>
        )}
      </div>

      {refresh && (
        <div className="flex space-x-2 mt-4">
          <button
            onClick={handleEdit}
            className="bg-zinc-800 text-white py-1 px-3 rounded-full hover:bg-zinc-900  font-bold text-white py-1 px-3"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-zinc-800 text-white py-1 px-3 rounded-full hover:bg-zinc-900  font-bold text-white py-1 px-3"
          >
            Delete
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default EventCard;
