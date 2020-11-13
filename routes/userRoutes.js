const express = require("express");

const Routes = express.Router();

Routes.get("/" , (req,res,next) => {
    res.render("userView/index")
});

Routes.get("/displayNumbers" , (req,res,next) => {
    res.render("userView/categories")
});

Routes.get("/contactUs" , (req,res,next) => {
    console.log(req.body);
    res.render("userView/contactUs")
})


module.exports = Routes;