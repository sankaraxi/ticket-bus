    const express = require('express');
    const dotenv = require('dotenv');
    const cors = require('cors');
    const connectDB = require('./config/db');


    dotenv.config();
    connectDB();

    const app = express();
    app.use(express.json());

    // Enable CORS
    app.use(cors());


    const userRoutes = require('./routes/userRoutes');
    const busRoutes = require('./routes/busRoutes');
    const bookingRoutes = require('./routes/bookingRoutes');

    app.use('/api/users', userRoutes);
    app.use('/api/buses', busRoutes);
    app.use('/api/bookings', bookingRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port😈🔥🔥 ${PORT}`));
