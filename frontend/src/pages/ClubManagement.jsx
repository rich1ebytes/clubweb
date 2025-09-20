import React, { useState, useEffect } from "react";
import api from "../api/api.js";

export default function ClubManagement() {
    const [clubAccounts, setClubAccounts] = useState([]);
    const [formData, setFormData] = useState({
        clubName: "",
        username: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingAccountId, setEditingAccountId] = useState(null);

    const authToken = localStorage.getItem("adminToken");

    // Fetch all club accounts
    useEffect(() => {
        fetchClubAccounts();
    }, []);

    const fetchClubAccounts = async () => {
        try {
            const response = await api.get("/admin/club-accounts", {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setClubAccounts(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch club accounts");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (editingAccountId) {
                await api.put(`/admin/club-accounts/${editingAccountId}`, formData, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
            } else {
                await api.post("/admin/club-accounts", formData, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
            }

            // Reset form and fetch updated accounts
            setFormData({ clubName: "", username: "", email: "", password: "" });
            setEditingAccountId(null);
            fetchClubAccounts();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to save club account");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (account) => {
        setFormData({
            clubName: account.clubName,
            username: account.username,
            email: account.email,
            password: "", // Do not pre-fill password
        });
        setEditingAccountId(account._id);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this club account?")) return;

        try {
            await api.delete(`/admin/club-accounts/${id}`, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            fetchClubAccounts();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete club account");
        }
    };

    const handleAdminLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminRole");
        window.location.href = "/admin";
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            {/* Header */}
            <div className="flex items-center mb-6 justify-between">
                <h1 className="text-3xl font-bold text-brand-primary">Manage Accounts</h1>
                <button
                    onClick={handleAdminLogout}
                    className="ml-2.5 bg-zinc-800 text-white py-2 px-4 rounded-full hover:bg-zinc-900 font-bold border border-zinc-900"
                >
                    Logout
                </button>
            </div>

            {error && (
                <div className="mb-4 p-3 font-bold bg-red-100 text-red-600 rounded-full">
                    {error}
                </div>
            )}

            {/* Club account form */}
            <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                {["clubName", "username", "email", "password"].map((field) => (
                    <div key={field}>
                        <label className="block font-semibold mb-1">{field === "password" ? "Password" : field.replace(/([A-Z])/g, " $1")}</label>
                        <input
                            type={field === "password" ? "password" : "text"}
                            name={field}
                            required={!(field === "password" && editingAccountId)}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                ))}

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-brand-accent font-bold text-white py-3 px-6 rounded-full hover:bg-white hover:text-brand-accent border border-brand-accent"
                    >
                        {loading
                            ? editingAccountId
                                ? "Updating..."
                                : "Creating..."
                            : editingAccountId
                                ? "Update Account"
                                : "Create Account"}
                    </button>

                    {editingAccountId && (
                        <button
                            type="button"
                            onClick={() => {
                                setFormData({ clubName: "", username: "", email: "", password: "" });
                                setEditingAccountId(null);
                                setError(null);
                            }}
                            className="ml-4 bg-zinc-800 font-bold text-brand-offwhite py-3 px-6 rounded-full hover:bg-zinc-900"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* Club accounts list */}
            <div className="space-y-4">
                {clubAccounts.map((account) => (
                    <div
                        key={account._id}
                        className="p-4 border rounded-md flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-xl font-semibold">{account.clubName}</h2>
                            <p className="text-sm text-gray-600">{account.username}</p>
                            <p className="text-sm text-gray-500">{account.email}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => handleEdit(account)}
                                className="bg-brand-accent text-white py-1 px-3 rounded-full hover:bg-white hover:text-brand-accent border border-brand-accent"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(account._id)}
                                className="bg-brand-accent text-white py-1 px-3 rounded-full hover:bg-white hover:text-brand-accent border border-brand-accent"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
