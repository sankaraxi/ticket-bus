const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  price: { type: Number, required: true },
  image_id: { type: String, required: true },
});

const Bus = mongoose.model('Bus', BusSchema);
module.exports = Bus;
