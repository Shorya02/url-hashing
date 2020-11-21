var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var Post = require('../../models/Post');

function generateURL(host, port, hash) {
    if (port) {
        return 'http://' + host + ":" + port + "/t/" + hash;
    } else {
        return 'https://' + host + "/t/" + hash;
    }
}

function createHash(req, res) {
    let url = req.body.text;
    let host = req.hostname;
    let port = host == "localhost" ? process.env.PORT : null;
    Post.find({ url: url }).exec().then(function (response) {
        if (response.length > 0 && !response[0].expiryFlag) {
            // res.send(generateURL(host, port, response[0].hash));
            res.redirect('/');
        }
        else {
            Post.create({ "url": url }).then(function (response) {
                // res.send(generateURL(host, port, response.hash));
                res.redirect('/');
            });
        }
    }).catch(function (err) {
        console.log(err);
    });
}

router.post('/', createHash);

module.exports = router;
