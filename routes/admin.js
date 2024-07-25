const router = require("express").Router();
const adminDashboard=require("../app/controller/adminDashboard/admindashboard");
const booksAndMembers = require("../app/controller/adminDashboard/booksAndMembers");
router.get("/adminbooks",adminDashboard().totalBooks)
router.get("/adminmembers",adminDashboard().totalMembers)
router.get("/adminusers",adminDashboard().loggedusers)
router.get("/latestbooks",booksAndMembers().latestBooks)
router.get("/latestmembers",booksAndMembers().latestMembers)
module.exports = router;
