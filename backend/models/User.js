const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  ticketsBooked: { type: Number, default: 0 },
  history: [
    {
      busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
      date: { type: Date, default: Date.now },
      price: { type: Number },
    },
  ],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
