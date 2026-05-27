 const BirthCertificateRequest = require("../models/BirthCertificateRequest");
 const createBirthCertificateRequest = async(req,res) => {
     try {
         const {
               fullName,dob,gender,address} = req.body;
         const request = await BirthCertificateRequest.create({
            fullName,dob,gender,address
         });
         res.status(201).json({
            message:"Birth certificate request submitted successfully",
            request
         });
               
         
     } catch(error) {
         console.log(error);
         res.status(500).json({
             message: "Sever error"
         });
     }
 };
 const getBirthCertificateRequests = async (req,res) => {
        try {
            const requests = await BirthCertificateRequest.find();
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
            const updatedRequest = await BirthCertificateRequest.findByIdAndUpdate(
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
  
 

 
 module.exports = { createBirthCertificateRequest, getBirthCertificateRequests,
                       updateRequestStatus
 };