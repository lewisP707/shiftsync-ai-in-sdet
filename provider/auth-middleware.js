// Basic Authentication Middleware for Admin Users

function adminAuth(req, res, next) {
    const token = req.headers['authorization'];
    
    // Example check for admin token
    if (token === 'yourAdminTokenHere') {
        next(); // proceed to the next middleware
    } else {
        res.status(403).json({ message: 'Access denied. Admins only.' });
    }
}

module.exports = adminAuth;