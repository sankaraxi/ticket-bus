const Booking = require('../models/Booking');
const User = require('../models/User');

const bookTicket = async (req, res) => {
  const { userId, busId, price } = req.body;
  const booking = new Booking({ userId, busId, price });
  await booking.save();

  const user = await User.findById(userId);
  user.history.push({ busId, price });
  user.ticketsBooked += 1;
  await user.save();

  res.json({ message: 'Ticket booked successfully!' });
};

module.exports = { bookTicket };
