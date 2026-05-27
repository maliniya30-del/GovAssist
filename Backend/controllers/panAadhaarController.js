const PanAadhaarRequest = require("../models/PanAadhaarRequest");
 const createPanAadhaarRequest = async(req,res) => {
     try {
         const {
               fullName,serviceType,aadhaarNumber,panNumber,address} = req.body;
         const request = await PanAadhaarRequest.create({
            fullName,serviceType,aadhaarNumber,panNumber,address
         });
         res.status(201).json({
            message:"PAN/Aadhaar request submitted successfully",
            request
         });
               
         
     } catch(error) {
         console.log(error);
         res.status(500).json({
             message: "Sever error"
         });
     }
 };
 const getPanAadhaarRequests = async (req,res) => {
        try {
            const requests = await PanAadhaarRequest.find();
            res. status(200).json(requests);
        } catch(error) {
            console.log(error);
            res.status(500).json({message: "Server error"});
        }
    };
 const updateRequestStatus = async (req,res) => {
        try {
            const {id} = req.params;
            const { status } = req.body;
            const updatedRequest = await PanAadhaarRequest.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            );
            res.status(200).json({
                message: "Request status updated",
                updatedRequest
            });
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Server error"
            });
        }
 }
 
 module.exports = { createPanAadhaarRequest, getPanAadhaarRequests ,
                       updateRequestStatus
 };
 
 