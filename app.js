const express = require('express');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

app.use('/', userRoutes);

// Error handling
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(config.PORT, () => {
    console.log(`Server is running on port http://localhost:${config.PORT}`);
});