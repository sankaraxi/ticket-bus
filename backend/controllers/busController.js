const Bus = require('../models/Bus');

const getBuses = async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
};

module.exports = { getBuses };
