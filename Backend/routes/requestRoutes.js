const express = require('express');
const multer = require('multer');
const router = express.Router();
const authMiddleware=require('../middleware/authMiddleware');

const {
    createRequest,
    getRequests
} = require('../controllers/requestController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/',authMiddleware ,upload.single('document'), createRequest);
router.get('/',authMiddleware ,getRequests);

module.exports = router;