import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/events/${id}`);
        setEvent(response.data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch event:", error);
        setError("Failed to fetch event details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-xl">Event not found.</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 mt-8">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={event.eventImage || 'https://via.placeholder.com/500'}
            alt={event.eventName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.eventName}</h1>
            <p className="text-lg text-gray-600 mb-4">
              Organized by: <span className="font-semibold text-brand-primary">{event.createdBy?.clubName || 'A Club'}</span>
            </p>
            <div className="text-md text-gray-700 mb-4">
              <p className="mb-2">
                <span className="font-semibold">Date:</span> {new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Venue:</span> {event.eventVenue}
              </p>
            </div>
            <p className="text-gray-800 text-base leading-relaxed mb-6">{event.eventDescription}</p>
          </div>
          <a
            href={event.eventFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center lg:inline-block lg:mt-0 text-white font-bold transition lg:ml-4 py-2 px-4 rounded-full bg-brand-accent hover:bg-white hover:text-brand-accent border-2 border-transparent hover:border-brand-accent duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;