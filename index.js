'use strict';

require('dotenv').config();

// Start up the DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start up the web server
require('./src/app.js').start(process.env.PORT);