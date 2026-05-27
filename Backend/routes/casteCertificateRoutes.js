const express = require("express");
const router = express.Router();
const { createCasteCertificateRequest, getCasteCertificateRequests,
              updateRequestStatus
} = require("../controllers/casteCertificateController");
const CasteCertificateRequest = require("../models/CasteCertificateRequest");
router.post(
    "/create",
     createCasteCertificateRequest
);
router.get(
      "/all",
      getCasteCertificateRequests
)
router.put(
      "/update-status/:id",
      updateRequestStatus
)

module.exports = router;