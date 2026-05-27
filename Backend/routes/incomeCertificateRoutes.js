const express = require("express");
const router = express.Router();
const { createIncomeCertificateRequest, getIncomeCertificateRequests,
              updateRequestStatus
} = require("../controllers/incomeCertificateController");
const IncomeCertificateRequest = require("../models/IncomeCertificateRequest");
router.post(
    "/create",
     createIncomeCertificateRequest
);
router.get(
      "/all",
      getIncomeCertificateRequests
)
router.put(
      "/update-status/:id",
      updateRequestStatus
)

module.exports = router;