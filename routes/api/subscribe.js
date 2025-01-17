const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load keys
const keys = require('../../config/keys');

// Load input validation
const validationSubscribeInput = require('../../validation/subscribe');

// import Subscriber Model
const Subscriber = require('../../models/Subscriber');

// Route: POST api/subscribe/
// Desc: Subscribe to website
// Access: Public
router.post('/', (req, res) => {
	const { isValid, errors } = validationSubscribeInput(req.body);

	if (!isValid) {
		return res.status(404).json(errors);
	}

	Subscriber.findOne({ email: req.body.email }).then(user => {
		if (user) {
			errors.email = 'email all ready exists';
			return res.status(400).json(errors);
		} else {
			const newSubscriber = new Subscriber({
				name: req.body.name,
				email: req.body.email
			});
			newSubscriber
				.save()
				.then(user => res.json(user))
				.catch(err => console.log(err));
		}
	});
});

// Route: GET api/subscribe/
// Desc: Subscribe to website
// Access: Public
router.get('/', (req, res) => {
	Subscriber.find()
		.then(subscriber => res.json(subscriber))
		.catch(err =>
			res.status(404).json({ nosubscribers: 'No subscribers yet' })
		);
});

module.exports = router;
