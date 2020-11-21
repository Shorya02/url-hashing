var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var Post = require('../../models/Post');
require('dotenv/config');
var secret = process.env.SECRET || "some random secret";

function createHash(req, res) {
    let url = req.body.text;
    let hash = crypto.createHmac('sha256', secret).update(url).digest('base64');
    // res.json({ "hashedURL": hashedURL });
    console.log('Value of Hash' + hash);
    Post.find({ hash: hash }).exec().then(function (response) {
        // console.log(response, ' From DB');
        console.log(response);
        if (response.length > 0 && !response[0].expiryFlag) {
            res.send("http://localhost:8000/t/" + response[0].hash);
        }
        else {
            Post.create({ "url": url, "hash": hash }).then(function (response) {
                console.log(response, 'hash');
                res.send("http://localhost:8000/t/" + response.hash);
            });
        }
        // res.send("https://localhost:8000/t/" + response.hash);
    }).catch(function (err) {
        console.log(err);
    });
}

router.post('/', createHash);

module.exports = router;
