var express = require('express');
var router = express.Router();
var Post = require('../../models/Post');

function createHash(req, res) {
    let url = req.body.text;
    Post.find({ url: url }).exec().then(function (response) {
        if (response.length > 0) {
            res.redirect('/');
        }
        else {
            Post.create({ "url": url }).then(function (response) {
                res.redirect('/');
            });
        }
    }).catch(function (err) {
        console.log(err);
    });
}

router.post('/', createHash);

module.exports = router;
