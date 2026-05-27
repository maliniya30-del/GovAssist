const mongoose=require('mongoose');
const requestSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Service',

    },
    status:{
        type:String,
        default:'Pending'
    },
    document:String,
},{
    timestamps:true
});
module.exports=mongoose.model('Request',requestSchema);