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
	}
});

module.exports = Subscriber = mongoose.model('subscriber', SubscribeScheme);
