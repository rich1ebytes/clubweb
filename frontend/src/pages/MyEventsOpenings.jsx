import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard';
import OpeningCard from '../components/OpeningCard';

const MyEventsOpenings = () => {
  const [events, setEvents] = useState([]);
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const authToken = localStorage.getItem("userToken");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    if (!authToken || isAdmin) {
      navigate("/for-clubs");
      return;
    }

    const fetchMyData = async () => {
      try {
        const [eventsResponse, openingsResponse] = await Promise.all([
          fetch('/api/club-members/events/my', {
            headers: { Authorization: `Bearer ${authToken}` },
          }),
          fetch('/api/club-members/openings/my', {
            headers: { Authorization: `Bearer ${authToken}` },
          })
        ]);

        const eventsData = await eventsResponse.json();
        const openingsData = await openingsResponse.json();

        setEvents(eventsData);
        setOpenings(openingsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyData();
  }, [authToken, isAdmin, navigate]);

  const handleDeleteEvent = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(`/api/club-members/events/${eventId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${authToken}` },
        });
        if (response.ok) {
          setEvents(events.filter(event => event._id !== eventId));
        } else {
          console.error("Failed to delete event");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  const handleDeleteOpening = async (openingId) => {
    if (window.confirm("Are you sure you want to delete this opening?")) {
      try {
        const response = await fetch(`/api/club-members/openings/${openingId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${authToken}` },
        });
        if (response.ok) {
          setOpenings(openings.filter(opening => opening._id !== openingId));
        } else {
          console.error("Failed to delete opening");
        }
      } catch (error) {
        console.error("Error deleting opening:", error);
      }
    }
  };

  const handleEditEvent = (event) => {
    navigate('/dashboard', { state: { selectedOption: { type: 'event', item: event } } });
  };

  const handleEditOpening = (opening) => {
    navigate('/dashboard', { state: { selectedOption: { type: 'opening', item: opening } } });
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">My Events & Openings</h1>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-brand-primary">My Events</h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
              <EventCard
                key={event._id}
                event={event}
                refresh={true}
                onEdit={() => handleEditEvent(event)}
                onDelete={() => handleDeleteEvent(event._id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-brand-secondary">No events created yet.</p>
        )}
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6 text-brand-primary">My Openings</h2>
        {openings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map(opening => (
              <OpeningCard
                key={opening._id}
                opening={opening}
                refresh={true}
                onEdit={() => handleEditOpening(opening)}
                onDelete={() => handleDeleteOpening(opening._id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-brand-secondary">No job openings created yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyEventsOpenings;
