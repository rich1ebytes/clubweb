import React, { useState } from "react";
import api from "../api/api.js"

const PostForm = ({ type, authToken, onSuccess, item }) => {
  const isEdit = !!item;
  const [formData, setFormData] = useState({
    eventName: item?.eventName || "",
    eventDate: item?.eventDate ? item.eventDate.split("T")[0] : "",
    eventVenue: item?.eventVenue || "",
    eventDescription: item?.eventDescription || "",
    role: item?.role || "",
    openingFor: item?.openingFor || "",
    description: item?.description || "",
    deadline: item?.deadline ? item.deadline.split("T")[0] : "",
    eventFormUrl: item?.eventFormUrl || "",
    openingFormUrl: item?.openingFormUrl || "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();

      if (type === "event") {
        formDataToSend.append("eventName", formData.eventName);
        formDataToSend.append("eventDate", formData.eventDate);
        formDataToSend.append("eventVenue", formData.eventVenue);
        formDataToSend.append("eventDescription", formData.eventDescription);
        formDataToSend.append("eventFormUrl", formData.eventFormUrl);
        if (image) {
          formDataToSend.append("eventImage", image);
        }
      } else if (type === "opening") {
        formDataToSend.append("role", formData.role);
        formDataToSend.append("openingFor", formData.openingFor);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("deadline", formData.deadline);
        formDataToSend.append("openingFormUrl", formData.openingFormUrl);
        if (image) {
          formDataToSend.append("image", image);
        }
      }

        const baseEndpoint =
            type === "event"
                ? "/club-members/events"
                : "/club-members/openings";
      const endpoint = isEdit ? `${baseEndpoint}/${item._id}` : baseEndpoint;

        await api({
            method: isEdit ? "put" : "post",
            url: endpoint,
            data: formDataToSend,
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        onSuccess();
      setImage(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-brand-primary mb-6">
        {isEdit ? "Edit" : "Create New"}{" "}
        {type === "event" ? "Event" : "Job Opening"}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {type === "event" ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.eventName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Venue
              </label>
              <input
                type="text"
                name="eventVenue"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.eventVenue}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description
              </label>
              <textarea
                name="eventDescription"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.eventDescription}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Form URL
              </label>
              <input
                type="url"
                name="eventFormUrl"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.eventFormUrl}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <input
                type="text"
                name="role"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opening For
              </label>
              <input
                type="text"
                name="openingFor"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.openingFor}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application Form URL
              </label>
              <input
                type="url"
                name="openingFormUrl"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.openingFormUrl}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
              />
            </div>
          </>
        )}

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
          className="bg-brand-accent font-bold text-white py-3 px-6 rounded-full hover:bg-white hover:font-bold hover:text-brand-accent border border-brand-accent"
          >
            {loading
              ? isEdit
                ? "Updating..."
                : "Creating..."
              : `${isEdit ? "Update" : "Create"} ${
                  type === "event" ? "Event" : "Opening"
                }`}
          </button>
          <button
            type="button"
            onClick={() => onSuccess()}
            className="ml-4 bg-zinc-700 font-bold text-brand-offwhite py-3 px-6 rounded-full hover:bg-zinc-900"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
