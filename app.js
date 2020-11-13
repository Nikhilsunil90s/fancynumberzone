const express = require("express");
const app = require('express')();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")
const path = require("path");
const flash = require('connect-flash');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public' , express.static('public'));
app.use(flash());

app.use("/" , userRoutes);
app.use("/" , adminRoutes);



app.listen(8000 , () => {
    console.log("App Is Running On 8000.");
})
