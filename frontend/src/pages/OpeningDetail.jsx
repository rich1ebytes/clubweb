import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OpeningDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [opening, setOpening] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpening = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/openings/${id}`);
        setOpening(response.data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch opening:", error);
        setError("Failed to fetch opening details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOpening();
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

  if (!opening) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-xl">Opening not found.</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 mt-8">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={opening.image || "https://via.placeholder.com/500"}
            alt={opening.role}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {opening.role}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              For:{" "}
              <span className="font-semibold text-brand-primary">
                {opening.openingFor}
              </span>
            </p>
            <div className="text-md text-gray-700 mb-4">
              <p className="mb-2">
                <span className="font-semibold">Deadline:</span>{" "}
                {new Date(opening.deadline).toLocaleDateString()}
              </p>
            </div>
            <p className="text-gray-800 text-base leading-relaxed mb-6">
              {opening.description}
            </p>
          </div>
          {opening.openingFormUrl && (
            <div className="mt-4">
              <a
                href={opening.openingFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-white font-bold transition py-3 px-6 rounded-full bg-brand-accent hover:bg-white hover:text-brand-accent border-2 border-transparent hover:border-brand-accent duration-300"
              >
                Register
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpeningDetail;
