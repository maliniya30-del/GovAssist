const mongoose = require("mongoose");
const PanAadhaarSchema=new mongoose.Schema(
    {
        fullName:{type:String,required:true},
        serviceType:{type:String,required:true},
        aadhaarNumber:{type:Number,required:true},
        panNumber:{type:String,required:true},
        status:{type:String, enum:["Pending", "Approved", "Rejected"], default: "Pending"},
        

    },
    {
        timestamps:true
    }
);
module.exports = mongoose.model(
        "PanAadhaarRequest",
          PanAadhaarSchema
);