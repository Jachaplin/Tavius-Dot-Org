const express = require('express');
const router = express.Router();

const keys = require('../../config/keys');

// import Subscriber Model
const Subscriber = require('../../models/Subscriber');

router.get('/', (req, res) => res.json({ msg: 'It works!!!' }));

module.exports = router;
