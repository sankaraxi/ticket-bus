const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  date: { type: Date, default: Date.now },
  price: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
