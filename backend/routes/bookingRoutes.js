const express = require('express');
const { getBooking } = require('../controllers/bookingController');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const bookingData = req.body;
      const newBooking = new Booking(bookingData);
      await newBooking.save();
      res.status(201).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving booking', error });
    }
  });

router.get('/', getBooking);

module.exports = router;
