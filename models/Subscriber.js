const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme
const SubscribeScheme = new Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Subscriber = mongoose.model('subscriber', SubscribeScheme);
