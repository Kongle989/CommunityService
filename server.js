let express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose"),
    app = express(),
    url = 'mongodb://localhost/helpinghand',
    users = require('./models/users');

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(url);

let db = mongoose.connection;
db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", () => {
    console.log("Mongoose connection successful.");
});

app.post('/create', (req, res) => {
    users.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        zip: req.body.zip
    })
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("App running");
});