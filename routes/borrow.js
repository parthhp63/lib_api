const adminBorrowActive = require("../app/controller/adminBorrow/adminBorrowActive");
const adminBorrowReject = require("../app/controller/adminBorrow/adminBorrowReject");
const adminBorrowRequest = require("../app/controller/adminBorrow/adminBorrowRequest");
// const deleteBorrowCron = require("../app/controller/adminBorrow/deleteBorrowCron");
const borrowDetails = require("../app/controller/user/userBorrow/borrowDetails");
const borrowRequest = require("../app/controller/user/userBorrow/borrowRequest");

const router = require("express").Router();

router.get("/borrowbook/:id",borrowDetails().borrowBookdetails)
router.post("/borrowrequest",borrowRequest().borrowRequest)
router.get("/adminborrowrequest",adminBorrowRequest().borrowRequest)
router.post("/acceptborrowrequest",adminBorrowRequest().borrowRequestAccept)
router.post("/rejectborrowrequest",adminBorrowRequest().borrowRequestReject)
router.get("/adminborrowactive",adminBorrowActive().borrowActive);
router.get("/adminborrowreject",adminBorrowReject().borrowReject);


module.exports = router;
