// src/components/Card.jsx
import React from 'react';

const Card = ({ children }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {children}
        </div>
    );
};

export default Card;