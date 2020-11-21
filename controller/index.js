const express = require('express');
const router = express.Router();
const urlApi = require('../routes/urlApi');
const hashApi = require('../routes/hashApi');

router.use('/tiny', hashApi);
router.use('/t', urlApi);

module.exports = router;
