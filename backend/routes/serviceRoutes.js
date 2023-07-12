const express = require("express");
const router = express.Router();
const { createService, singleService, updateService, showServices } = require('../controllers/serviceController');
const { isAuthenticated, isAdmin } = require("../middleware/auth");



// service routes

// /api/service/create
router.post('/service/create', isAuthenticated, isAdmin, createService);
// /api/service/id
router.get('/service/:id', singleService);
// /api/service/update/service_id
// router.put('/service/update/:service_id', isAuthenticated, isAdmin, updateService);
// /api/services/show
router.get('/services/show',  showServices);


module.exports = router;