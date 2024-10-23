const logger = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Method: ${req.method}`);
        console.log(`URL: ${req.originalUrl}`);
        console.log(`Status Code: ${res.statusCode}`);
        console.log(`Duration: ${duration}ms\n`);
    });

    next();
};

module.exports = logger;