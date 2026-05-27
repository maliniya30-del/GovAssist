const mongoose=require('mongoose');
const serviceSchema =new mongoose.Schema({
    serviceName :{
        type:String,
        required:true
     },
     description:String,
     requiredDocuments:[String],
     estimatedTime:String,
     serviceCharge:Number
    },{
    timestamps:true
    }
);
module.exports=mongoose.model('Service',serviceSchema);