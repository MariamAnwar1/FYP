const ServiceType = require('../models/serviceTypeModel');
const ErrorResponse = require('../vtils/errorResponse');

// create service category
 exports.createServiceType = async(req, res, next) =>{
    try {
        const serviceT = await ServiceType.create({
            serviceTypeName: req.body.serviceTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            serviceT
        })
    } catch (error) {
        next(error);    
    }
 }

 // all services category
 exports.allServiceType = async(req, res, next) =>{
    try {
        const serviceT = await ServiceType.find();
        res.status(200).json({
            success: true,
            serviceT
        })
    } catch (error) {
        next(error);    
    }
 }

  // update service type
  exports.updateServiceType = async(req, res, next) =>{
    try {
        const serviceT = await ServiceType.findByIdAndUpdate(req, param.type_id, req.body, {new: true});
        res.status(200).json({
            success: true,
            serviceT
        })
    } catch (error) {
        next(error);    
    }
 }

   // delete service type
   exports.deleteServiceType = async(req, res, next) =>{
    try {
        const serviceT = await ServiceType.findByIdAndRemove(req, param.type_id);
        res.status(200).json({
            success: true,
            message: "Service type deleted"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));    
    }
 }