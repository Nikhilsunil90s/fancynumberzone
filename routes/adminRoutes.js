const express = require("express");

const Routes = express.Router();


Routes.get("/admin" , (req,res,next) => {
    res.render("adminView/admin");
})


module.exports = Routes;