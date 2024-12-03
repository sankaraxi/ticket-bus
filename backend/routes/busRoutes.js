const express = require('express');
const { getBuses } = require('../controllers/busController');
const router = express.Router();

router.get('/', getBuses);

module.exports = router;
