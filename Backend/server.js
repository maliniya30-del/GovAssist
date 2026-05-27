const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const birthCertificateRoutes = require("./routes/birthCertificateRoutes");
const panAadhaarRoutes = require("./routes/panAadhaarRoutes");
const incomeCertificateRoutes = require("./routes/incomeCertificateRoutes");
const casteCertificateRoutes = require("./routes/casteCertificateRoutes");
const residenceCertificateRoutes = require("./routes/residenceCertificateRoutes")

const authRoutes = require("./routes/authRoutes");


dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));

const userRoutes=require('./routes/userRoutes');
const serviceRoutes=require('./routes/serviceRoutes');
const requestRoutes=require('./routes/requestRoutes');

app.use('/api/users',userRoutes);
app.use('/api/services',serviceRoutes);
app.use('/api/requests',requestRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/birth-certificate', birthCertificateRoutes);
app.use('/api/pan-aadhaar', panAadhaarRoutes);
app.use('/api/income-certificate', incomeCertificateRoutes );
app.use('/api/caste-certificate',casteCertificateRoutes );
app.use('/api/residence-certificate',residenceCertificateRoutes );






const port=5000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB connected');
    app.listen(port,()=>{
        console.log(`server running on port ${port}`);
    });
})
.catch((err)=>console.log(err));
