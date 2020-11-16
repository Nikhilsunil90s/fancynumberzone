const express = require("express");

const Routes = express.Router();

Routes.get("/" , (req,res,next) => {
    res.render("userView/index")
});

Routes.get("/categories" , (req,res,next) => {
    res.render("userView/categories")
});

Routes.get("/contactUs" , (req,res,next) => {
    console.log(req.body);
    res.render("userView/contactUs")
})

Routes.get("/cart" , (req,res,next) => {
    console.log(req.body);
    res.render("userView/cart")
})


module.exports = Routes;