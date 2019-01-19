if (process.env.NODE_ENV === 'production') {
	module.exports = require('./keys_prod');
} else {
	// require('dotenv').config();
	module.exports = require('./keys_dev');
}
