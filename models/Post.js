const mongoose = require('mongoose');
const shortId = require('shortid');


const HashSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clickCounter: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('Posts', HashSchema);