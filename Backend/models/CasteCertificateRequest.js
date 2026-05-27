const mongoose = require("mongoose");
const CasteCertificateSchema=new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        caste:{type:String,required:true},
        religion:{type:String,required:true},
        address:{type:String,required:true},
        status:{type:String, enum:["Pending", "Approved", "Rejected"], default: "Pending"},
        
    },
    {
        timestamps:true
    }
);
module.exports = mongoose.model(
        "CasteCertificateRequest",
        CasteCertificateSchema
);