// src/pages/Team.jsx
import TeamCard from "../components/TeamCard";
import TeamData from "../data/teamData";
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

const members = TeamData;

export default function Team() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div className="min-h-screen w-full p-8 text-white">
        <h1 className="text-brand-primary text-4xl font-bold text-center mb-12">
          Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <TeamCard
              key={member.name}
              image={member.image}
              name={member.name}
              title={member.title}
              tagline={member.tagline}
              instagram={member.instagram}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
