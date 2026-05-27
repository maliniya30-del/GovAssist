const express = require('express');
const router = express.Router();


const {
    registerUser,
    loginUser
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/',(req,res)=>{
    res.send('user api is working');
});

module.exports=router;