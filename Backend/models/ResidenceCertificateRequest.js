const mongoose = require("mongoose");
const ResidenceCertificateSchema=new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        residenceType:{type:String,required:true},
        yearsStayed:{type:String,required:true},
        address:{type:String,required:true},
        status:{type:String, enum:["Pending", "Approved", "Rejected"], default: "Pending"},
        

    },
    {
        timestamps:true
    }
);
module.exports = mongoose.model(
        "ResidenceCertificateRequest",
        ResidenceCertificateSchema
);