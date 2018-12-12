const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../../config/keys');

const validateSignUpInput = require('../../validation/register');

const validateLoginInput = require('../../validation/login');

// Load Admin model
const Admin = require('../../models/Admin');

// Load User model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'Admin Works!!!' }));

// Route: POST api/admin/register
// Desc: register admin route
// Access: Public
router.post('/register', (req, res) => {
	const { isValid, errors } = validateSignUpInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	} else {
		Admin.findOne({ email: req.body.email }).then(admin => {
			if (admin) {
				errors.email = 'Email already exists';
				return res.status(400).json(errors);
			} else {
				const newAdmin = new Admin({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				});

				// Hash out the password
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newAdmin.password, salt, (err, hash) => {
						if (err) throw err;
						newAdmin.password = hash;
						newAdmin
							.save()
							.then(admin => res.json(admin))
							.catch(err => console.log(err));
					});
				});
			}
		});
	}
});

// Route: POST api/admin/login
// Desc: login admin route
// Access: Public
router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	const email = req.body.email;
	const password = req.body.password;

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	// Find user by email
	User.findOne({ email }).then(admin => {
		// Check for admin
		if (!admin) {
			errors.email = 'Admin not found';
			return res.status(404).json(errors);
		}
		// Check password
		bcrypt.compare(password, admin.password).then(isMatch => {
			if (isMatch) {
				// res.json({msg: 'Success'});
				// admin Matched

				// Create jwt payload
				const payload = {
					id: admin.id,
					name: admin.name
				};

				// Sign Token
				jwt.sign(payload, keys.secretOrKey, (err, token) => {
					res.json({
						success: true,
						token: 'Bearer ' + token
					});
				});
			} else {
				return res.status(400).json({ password: 'Password incorrect' });
			}
		});
	});
});

module.exports = router;
