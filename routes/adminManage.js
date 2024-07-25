const router = require("express").Router();
const ManageUser = require("../app/controller/adminManage/ManageUser");

router.get('/allusers',ManageUser().displayUser)
router.post('/deleteuser/:id',ManageUser().deleteuser)


module.exports = router;