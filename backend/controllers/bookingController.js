const Booking = require('../models/Booking');

const getBooking = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};

module.exports = { getBooking };
