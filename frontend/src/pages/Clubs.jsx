import ClubCard from "../components/ClubCard";
import clubsData from "../data/clubsData";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.05,
  },
};

const Clubs = () => {
  // Use local frontend data instead of fetching from backend
  const clubs = clubsData;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center p-4">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            club={{ ...club, link: `/clubs/${club.id}` }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Clubs;
