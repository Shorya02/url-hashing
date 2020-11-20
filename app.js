const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const crypto = require('crypto');
const secret = "NEWSBYTES";
app.use(bodyParser.json());

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) => { if (err) console.log('DB Error', err) });

//Import Routes
const postRoutes = require('./routes/posts');

const Post = require('./models/Post');

//Middleware for Routes

app.use('/posts', postRoutes);

app.post('/tiny', (req, res) => {
    let url = req.body.text;
    let hash = crypto.createHmac('sha256', secret).update(url).digest('base64');
    // res.json({ "hashedURL": hashedURL });
    console.log('Value of Hash' + hash);
    Post.find({ hash: hash }).exec().then((response) => {
        // console.log(response, ' From DB');
        console.log(response);
        if (response.length > 0 && !response[0].expiryFlag) {
            res.send("http://localhost:8000/t/" + response[0].hash);
        }
        else {
            Post.create({ "url": url, "hash": hash }).then((response) => {
                console.log(response, 'hash');
                res.send("http://localhost:8000/t/" + response.hash);
            });
        }
        // res.send("https://localhost:8000/t/" + response.hash);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/t/:hash', (req, res) => {
    let hash = req.params.hash;
    Post.findOne({ hash: hash }).exec().then((response) => {
        console.log(response, ' From DB');
        // res.send(response.url);
        res.writeHead(302, {
            'Location': response.url
        });
        res.end();
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(8000);
