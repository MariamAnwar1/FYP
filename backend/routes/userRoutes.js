const express = require("express");
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser, createUserServicesHistory} = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");


// user routes

// /api/allUsers
router.get('/allusers', isAuthenticated , isAdmin, allUsers);
// /api/user/id
router.get('/user/:id', isAuthenticated , singleUser);
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated , editUser);
// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated , isAdmin, deleteUser);
// /api/admin/serviceHistory
router.post('/admin/serviceHistory', isAuthenticated , createUserServicesHistory);


module.exports = router;