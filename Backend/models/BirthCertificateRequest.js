const mongoose = require("mongoose");
const birthCertificateSchema=new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        dob:{type:String,required:true},
        gender:{type:String,required:true},
        address:{type:String,required:true},
        status:{type:String, enum:["Pending", "Approved", "Rejected"], default: "Pending"},
        
    },
    {
        timestamps:true
    }
);
module.exports = mongoose.model(
        "BirthCertificateRequest",
        birthCertificateSchema
);