var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var Post = require('../../models/Post');
require('dotenv/config');
var secret = process.env.SECRET || "some random secret";

function generateURL(host, port, hash) {
    console.log("GenerateUrl", hash);
    if (port) {
        return host + ":" + port + "/t/" + hash;
    } else {
        return host + "/t/" + hash;
    }
}

function createHash(req, res) {
    let url = req.body.text;
    let host = req.hostname;
    let port = host == "localhost" ? process.env.PORT : null;
    console.log('Host Name :', host);
    let hash = crypto.createHmac('sha256', secret).update(url).digest('hex');
    // res.json({ "hashedURL": hashedURL });
    console.log('Value of Hash ' + hash);
    Post.find({ hash: hash }).exec().then(function (response) {
        // console.log(response, ' From DB');
        console.log(response);
        if (response.length > 0 && !response[0].expiryFlag) {
            console.log("Post Find Hash ", response[0].hash);
            res.send(generateURL(host, port, response[0].hash));
        }
        else {
            Post.create({ "url": url, "hash": hash }).then(function (response) {
                console.log(response, 'hash');
                res.send(generateURL(host, port, response.hash));
            });
        }
        // res.send("https://localhost:8000/t/" + response.hash);
    }).catch(function (err) {
        console.log(err);
    });
}

router.post('/', createHash);

module.exports = router;
