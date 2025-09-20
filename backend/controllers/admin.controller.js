import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

// Admin login
export const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && user.password === password && user.role === 'admin') {
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                token,
            });
        } else {
            res.status(401).json({ message: "Invalid credentials or not an admin" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new club account
export const createClubAccount = async (req, res) => {
    const { clubName, username, email, password } = req.body;
    try {
        const newClubAccount = await User.create({
            clubName,
            username,
            email,
            password,
            role: "club",
        });
        res.status(201).json(newClubAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all club accounts
export const getClubAccounts = async (req, res) => {
    try {
        const clubs = await User.find({ role: "club" }).select('-password');
        res.json(clubs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a club account
export const updateClubAccount = async (req, res) => {
    try {
        const { clubName, username, email } = req.body;
        const updatedClubAccount = await User.findByIdAndUpdate(
            req.params.id,
            { clubName, username, email },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedClubAccount) {
            return res.status(404).json({ message: "Club account not found" });
        }
        res.json(updatedClubAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Delete a club account
export const deleteClubAccount = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "Club account deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};