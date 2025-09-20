import { motion } from "framer-motion";
import  { useContext, useEffect } from "react";
import EventCard from "../components/EventCard";
import OpeningCard from "../components/OpeningCard";
import { DataContext } from "../context/DataContext";

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

export default function Home() {
  const { events, openings, loading, error, fetchAllData } = useContext(DataContext);
  
  // This will re-fetch data whenever the component is mounted, ensuring fresh data.
  // The DataProvider context will prevent unnecessary re-fetches from other components.
  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-brand-secondary mt-8 text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-8 text-xl">
        {error}
      </div>
    );
  }

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        className="container mx-auto p-4"
      >
        <h2 className="text-4xl font-bold text-brand-primary mb-12 text-center">
          Ongoing & Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => <EventCard key={event._id} event={event} />)
          ) : (
            <p className="text-center text-brand-secondary col-span-full">No upcoming events at the moment. Check back soon!</p>
          )}
        </div>

        <h2 className="text-4xl font-bold text-brand-primary mt-16 mb-12 text-center">
          Ongoing Club Recruitments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {openings.length > 0 ? (
            openings.map((opening) => (
              <OpeningCard key={opening._id} opening={opening} />
            ))
          ) : (
            <p className="text-center text-brand-secondary col-span-full">No job openings available right now.</p>
          )}
        </div>
      </motion.div>
    </>
  );
}