import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Middleware to authenticate JWT and attach user to request
const authenticate = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token payload (excluding password)
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ message: "Not authorized, user not found" });
            }

            next();
            return; // Ensure no further code runs after next()
        } catch (error) {
            res.status(401).json({ message: "Not authorized, token failed" });
            return;
        }
    }

    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
        return;
    }
};

// Middleware to authorize roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: `Role ${req.user ? req.user.role : 'unauthenticated'} is not authorized to access this resource` });
        }
        next();
    };
};

export { authenticate, authorizeRoles };