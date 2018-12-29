const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const guest = require('./routes/api/guest');
const user = require('./routes/api/user');
const subscriber = require('./routes/api/subscribe');
const admin = require('./routes/api/admin');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(
		db,
		{ useNewUrlParser: true, useFindAndModify: false }
	)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/guest', guest);
app.use('/api/user', user);
app.use('/api/subscribe', subscriber);
app.use('/api/admin', admin);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
