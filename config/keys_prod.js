const dotenv = require('dotenv').config();

module.exports = {
	mongoURI: process.env.MONGO_URI,
	secretOrKey: process.env.SECRET_OR_KEY,

	key: process.env.TUMBLR_KEY,
	secret: process.env.TUMBLR_SECRET,
	token: process.env.TUMBLR_TOKEN,
	tokensecret: process.env.TUMBLR_TOKEN_SECRET
};
