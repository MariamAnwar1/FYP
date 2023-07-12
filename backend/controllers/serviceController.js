const Service = require('../models/serviceModel');
const serviceType = require('../models/serviceTypeModel');
const ErrorResponse = require('../vtils/errorResponse');

// create service category
 exports.createService = async(req, res, next) =>{
    try {
        const service = await Service.create({
            title: req.body.title,
            discription: req.body.discription,
            salary: req.body.salary,
            location: req.body.location,
            serviceType: req.body.ServiceType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            service
        })
    } catch (error) {
        next(error);    
    }
 }

 // single service 
 exports.singleService = async (req, res, next) =>{
    try {
        const service = await Service.findById(req.params.id);
        res.status(200).json({
            success: true,
            service
        })
    } catch (error) {
        next(error);    
    }
 }

  // update service by id 
  exports.showServices = async (req, res, next) =>{

    // enable search
    const keyword = req.query.keyword ? {
        title:{
            $regex: req.query.keyword,
            $options: "1"
        }
    }     :  {}

        // filter services by category ids
        let ids = [];
        const serviceTypeCategory = await serviceType.find({},{_id:1});
        serviceTypeCategory.forEach(cat =>{
            ids.push(cat,_id);
        })
        let cat = req.query.cat;
        let categ = cat == '' ? cat: ids;

       //services by location
       let locations = [];
       let serviceByLocation = await Service.find({},{location: 1});
       serviceByLocation.forEach(val =>{
        locations.push(val.location);
       });
       let setUniqueLocation = [...new Set(locations)];
       let location = req.query.location;
       let locationfiler = location ==="" ? location: setUniqueLocation;


        // enable pagination
        const pageSize = 5;
        const page = Number(req.query.pageNumber) || 1;
        // const count = await Service.find({}).estimateDocumentCount();
        const count = await Service.find({...keyword, serviceType: categ, location: locationfiler})
        .countDocument();

    try {
    const services = await Service.find({...keyword, serviceType: categ, location: locationfiler})
    .sort({createdAt: -1}).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            services,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation
        })
    } catch (error) {
        next(error);    
    }
 }
 