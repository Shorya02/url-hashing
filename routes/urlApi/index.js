var express = require('express');
var router = express.Router();
var Post = require('../../models/Post');

function getUrl(req, res) {
    let hash = req.params.hash;
    Post.findOne({ hash: hash }).exec().then(function (response) {
        if (response && response.url) {
            response.clickCounter++;
            response.save();
            res.redirect(response.url);
        } else {
            res.send("Incorrect Url");
        }
    }).catch(function (err) {
        console.log(err);
    });
}

router.get('/:hash', getUrl);

module.exports = router;