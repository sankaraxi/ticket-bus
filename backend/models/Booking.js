const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userName: { type: String,  required: true },
  busName: { type: String, required: true },
  busId: { type: String,  required: true },
  date: { type: Date, default: Date.now },
  price: { type: Number, required: true },
  seat: { type: Number, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  seatPreference: { type: String, required: true },
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
