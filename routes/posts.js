const express = require('express');
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    console.log('Get Request Body ' + req.body);
    console.log('Get Response Body ' + res.body);
    res.send('We are on posts');
});

router.get('/Specific', (req, res) => {
    res.send('Specifics');
});

router.post('/ ', (req, res) => {
    console.log('Post Request Body ' + req.body);
    console.log('Post Response Body ' + res.body);
})

module.exports = router;
