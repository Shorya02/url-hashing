const mongoose = require('mongoose');

const HashSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    expiryFlag: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Posts', HashSchema);