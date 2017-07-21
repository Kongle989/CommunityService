let express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose"),
    app = express(),
    url = 'mongodb://localhost/nytreact';