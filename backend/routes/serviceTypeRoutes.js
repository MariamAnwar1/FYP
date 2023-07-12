const express = require("express");
const router = express.Router();
const { createServiceType, allServiceType, updateServiceType, deleteServiceType } = require("../controllers/serviceTypeController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");



// service Type routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createServiceType)
// /api/type/service
router.get('/type/service' , allServiceType)
// /api/type/update/:type_id
router.put('/type/update/:type_id' , allServiceType, isAdmin, updateServiceType)
// /api/type/delete/:type_id
router.delete('/type/delete/:type_id' , allServiceType, isAdmin, deleteServiceType)


module.exports = router;