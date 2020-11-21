const mongoose = require('mongoose');

module.exports = function (dbUri) {
    var db;

    if (dbUri && typeof dbUri == "string") {
        //Connect to Database
        db = mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    } else {
        console.log("Invalid Connection String");
    }

    //Connection Events
    mongoose.connection.on("connected", function () {
        console.log("Connected to Database.");
    });
    mongoose.connection.on("error", function (err) {
        console.log("Mongoose connection error: " + err);
    });

    return db;
}