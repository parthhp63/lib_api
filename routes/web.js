const web = require("express").Router();
const userRegistration=require('../app/controller/userRegistration')
const authMiddleware=require("../app/middleware/authMiddleware");
const authenticateUser=require("../app/controller/authentication/authenticateUser")
const books=require('./books')
const adminManage=require('./adminManage')
const borrow=require("./borrow")
const admin=require("./admin")
const user=require("./user")
web.post('/register',userRegistration().addUser);
web.post('/login',userRegistration().login);
web.use("/books", books);
web.use("/borrow",borrow);
web.use("/admin",admin);
web.use("/adminmanage",adminManage);
web.use("/user",user);
web.get("/getuser",authMiddleware,authenticateUser().checkUser);
web.get("/logout",authMiddleware,userRegistration().logout);
module.exports = web;