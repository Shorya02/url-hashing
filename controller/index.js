const express = require('express');
const router = express.Router();
const urlApi = require('../routes/urlApi');
const hashApi = require('../routes/hashApi');
const Post = require('../models/Post');
const renderUI = require('../routes/home');

router.use('/', renderUI);

router.use('/tiny', hashApi);

router.use('/t', urlApi);

module.exports = router;
