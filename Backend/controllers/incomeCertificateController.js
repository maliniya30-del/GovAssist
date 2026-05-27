 const IncomeCertificateRequest = require("../models/IncomeCertificateRequest");
 const createIncomeCertificateRequest = async(req,res) => {
     try {
         const {
               fullName,income,occupation,address} = req.body;
         const request = await IncomeCertificateRequest.create({
            fullName,income,occupation,address
         });
         res.status(201).json({
            message:"Income certificate request submitted successfully",
            request
         });
               
         
     } catch(error) {
         console.log(error);
         res.status(500).json({
             message: "Server error"
         });
     }
 };
 const getIncomeCertificateRequests = async (req,res) => {
        try {
            const requests = await IncomeCertificateRequest.find();
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
            const updatedRequest = await IncomeCertificateRequest.findByIdAndUpdate(
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
 

 
 module.exports = { createIncomeCertificateRequest, getIncomeCertificateRequests,
                       updateRequestStatus
 };