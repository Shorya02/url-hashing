const express = require('express');
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    res.send('We are on posts');
});

/* router.get('/Specific', (req, res) => {
    res.send('Specifics');
}); */

router.post('/', (req, res) => {
    console.log('Request Body ' + req.body);
    res.send('Received the Post Data');
    console.log('Response Body ' + res);
});

module.exports = router;
