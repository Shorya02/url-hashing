var express = require('express');
var router = express.Router();
var Post = require('../../models/Post');

router.get('/', function (req, res) {
    Post.find().then(function (tinyUrl) {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.render('index', { shortUrls: tinyUrl, fullHashedUrl: fullUrl });
    });
});


module.exports = router;