import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api.js'; //

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllData = async () => {
        setLoading(true);
        setError(null);
        try {
            const [eventsRes, openingsRes] = await Promise.all([
                api.get('/events'),   // remove extra '/api' — api.js handles baseURL
                api.get('/openings'),
            ]);
            setEvents(eventsRes.data);
            setOpenings(openingsRes.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch data.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const value = { events, openings, loading, error, fetchAllData };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
