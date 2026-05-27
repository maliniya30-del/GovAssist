const mongoose = require("mongoose");
const IncomeCertificateSchema=new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        income:{type:Number,required:true},
        occupation:{type:String,required:true},
        address:{type:String,required:true},
        status:{type:String, enum:["Pending", "Approved", "Rejected"], default: "Pending"},
        
    },
    {
        timestamps:true
    }
);
module.exports = mongoose.model(
        "IncomeCertificateRequest",
        IncomeCertificateSchema
);