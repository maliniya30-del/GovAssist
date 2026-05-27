const express = require("express");
const router = express.Router();
const { createBirthCertificateRequest, getBirthCertificateRequests,
              updateRequestStatus
} = require("../controllers/birthCertificateController");
const BirthCertificateRequest = require("../models/BirthCertificateRequest");
router.post(
    "/create",
     createBirthCertificateRequest
);
router.get(
      "/all",
      getBirthCertificateRequests
)
router.put(
      "/update-status/:id",
      updateRequestStatus
)

module.exports = router;