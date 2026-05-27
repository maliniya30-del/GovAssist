const ResidenceCertificateRequest = require("../models/ResidenceCertificateRequest");
const createResidenceCertificateRequest = async(req,res) => {
     try {
         const {
               fullName,residenceType,yearsStayed,address} = req.body;
         const request = await ResidenceCertificateRequest.create({
            fullName,residenceType,yearsStayed,address
         });
         res.status(201).json({
            message:"Residence certificate request submitted successfully",
            request
         });
               
         
     } catch(error) {
         console.log(error);
         res.status(500).json({
             message: "Server error"
         });
     }
 };
 const getResidenceCertificateRequests = async (req,res) => {
        try {
            const requests = await ResidenceCertificateRequest.find();
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
            const updatedRequest = await ResidenceCertificateRequest.findByIdAndUpdate(
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
 
 

 
 module.exports = { createResidenceCertificateRequest, getResidenceCertificateRequests,
                       updateRequestStatus
 };