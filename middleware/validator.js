const validateUserData = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    
    if (!firstName || !lastName || !hobby) {
        return res.status(400).json({
            error: "Missing required fields. firstName, lastName, and hobby are required."
        });
    }
    
    if (typeof firstName !== 'string' || 
        typeof lastName !== 'string' || 
        typeof hobby !== 'string') {
        return res.status(400).json({
            error: "Invalid data types. firstName, lastName, and hobby must be strings."
        });
    }
    
    next();
};

module.exports = validateUserData;