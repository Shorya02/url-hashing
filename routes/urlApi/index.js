var express = require('express');
var router = express.Router();
var Post = require('../../models/Post');

function getUrl(req, res) {
    let hash = req.params.hash;
    Post.findOne({ hash: hash }).exec().then(function (response) {
        console.log(response, ' From DB');
        if (response && response.url) {
            res.writeHead(302, {
                'Location': response.url
            });
            res.end();
        } else {
            res.send("Incorrect Url");
        }
    }).catch(function (err) {
        console.log(err);
    });
}

router.get('/:hash', getUrl);

module.exports = router;