const express = require("express");
const router = express.Router();
const { createPanAadhaarRequest, getPanAadhaarRequests ,
                       updateRequestStatus
} = require("../controllers/panAadhaarController");
constPanAadhaarRequest = require("../models/PanAadhaarRequest");
router.post(
    "/create",
     createPanAadhaarRequest
);
router.get(
      "/all",
       getPanAadhaarRequests
)
router.put(
      "/update-status/:id",
      updateRequestStatus
)

module.exports = router;