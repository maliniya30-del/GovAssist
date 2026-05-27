 const CasteCertificateRequest = require("../models/CasteCertificateRequest");
 const createCasteCertificateRequest = async(req,res) => {
     try {
         const {
               fullName,caste,religion,address} = req.body;
         const request = await CasteCertificateRequest.create({
            fullName,caste,religion,address
         });
         res.status(201).json({
            message:"Caste certificate request submitted successfully",
            request
         });
               
         
     } catch(error) {
         console.log(error);
         res.status(500).json({
             message: "Server error"
         });
     }
 };
 const getCasteCertificateRequests = async (req,res) => {
        try {
            const requests = await CasteCertificateRequest.find();
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
            const updatedRequest = await CasteCertificateRequest.findByIdAndUpdate(
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
 
 

 
 module.exports = { createCasteCertificateRequest, getCasteCertificateRequests,
                       updateRequestStatus
 };