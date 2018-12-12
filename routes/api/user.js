const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../../config/keys');

// Load user model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'User Works!!!' }));

module.exports = router;
