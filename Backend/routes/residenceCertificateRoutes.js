const express = require("express");
const router = express.Router();
const { createResidenceCertificateRequest, getResidenceCertificateRequests,
              updateRequestStatus
} = require("../controllers/residenceCertificateController");
const ResidenceCertificateRequest = require("../models/ResidenceCertificateRequest");
router.post(
    "/create",
     createResidenceCertificateRequest
);
router.get(
      "/all",
      getResidenceCertificateRequests
)
router.put(
      "/update-status/:id",
      updateRequestStatus
)

module.exports = router;