const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const serviceTypeSchema = new mongoose.Schema({

    ServiceTypeName: {
        type: String,
        trim: true,
        required: [true, "service category is required"],
        maxlength: 70,
    },
    
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },

}, {timestamps:true})


module.exports = mongoose.model("serviceType",serviceTypeSchema);
