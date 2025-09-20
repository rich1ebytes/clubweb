// src/context/DataContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllData = async () => {
        setLoading(true);
        try {
            const [eventsRes, openingsRes] = await Promise.all([
                axios.get('/api/events/'),
                axios.get('/api/openings/'),
            ]);
            setEvents(eventsRes.data);
            setOpenings(openingsRes.data);
        } catch (err) {
            setError('Failed to fetch data.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    // The value that will be provided to all components
    const value = { events, openings, loading, error, fetchAllData };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};