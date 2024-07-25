const router = require("express").Router();
const userBooks=require("../app/controller/user/userBooks/userBooks");
const userBorrow=require("../app/controller/user/userBorrow/userBorrow");
const profileView = require("../app/controller/user/userProfile/profileView");
const authMiddleware=require("../app/middleware/authMiddleware");

router.get("/userbooks/:id",userBooks().getUserBooks)   
router.get("/userborrow/:id",userBorrow().avilableBooks)

router.get("/userviewbook/:id",userBooks().viewBook);
router.get("/userprofile",authMiddleware,profileView().profile)
module.exports = router;
