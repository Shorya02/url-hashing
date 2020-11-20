const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postRoutes = require('./routes/posts');

//Middleware for Routes

app.use('/posts', postRoutes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to DB'));

app.listen(8000);
