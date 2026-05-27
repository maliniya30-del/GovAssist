const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
    try {
        const request = await Request.create({
            user: req.body.user,
            service: req.body.service,
            document: req.file ? req.file.path : ''
        });

        res.status(201).json(request);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getRequests=async(req,res)=>{
     try{
        const requests=await Request.find()
        .populate('user','-password')
        .populate('service');
        res.json(requests);
     }catch(error){
        res.status(500).json({message:error.message});
     }
};