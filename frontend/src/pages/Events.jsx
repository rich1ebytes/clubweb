// src/pages/Events.jsx
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import EventCard from "../components/EventCard";
import { DataContext } from "../context/DataContext";

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

export default function Events() {
  const { events, loading, error, fetchAllData } = useContext(DataContext);
  
  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-brand-secondary mt-8 text-xl">
        Loading events...
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
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-4xl font-bold text-brand-primary text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p className="text-center text-brand-secondary col-span-full">No events found.</p>
        )}
      </div>
    </motion.div>
  );
}