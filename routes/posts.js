const express = require('express');
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.get('/Specific', (req, res) => {
    res.send('Specifics');
});

router.post('/ ', (req, res) => {
    console.log(req.body);
})

module.exports = router;
