const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../../config/keys');

const validateSignUpInput = require('../../validation/register');

// Load user model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'User Works!!!' }));

// Route: POST api/user/register
// Desc: register user route
// Access: Public
router.post('/register', (req, res) => {
	const { isValid, errors } = validateSignUpInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	} else {
		User.findOne({ email: req.body.email }).then(user => {
			if (user) {
				errors.email = 'Email already exists';
				return res.status(400).json(errors);
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				});

				// Hash out the password
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		});
	}
});

module.exports = router;
