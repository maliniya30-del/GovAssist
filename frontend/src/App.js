import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import BirthCertificate from "./pages/BirthCertificate";
import IncomeCertificate from "./pages/IncomeCertificate";
import CasteCertificate from "./pages/CasteCertificate";
import ResidenceCertificate from "./pages/ResidenceCertificate";
import PanAadhaarService from "./pages/PanAadhaarService";
import LearnMore from "./pages/LearnMore";
import RequestHistory from "./pages/RequestHistory";
import AdminPanel from "./pages/AdminPanel";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

import Contact from "./pages/Contact";



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/services" element={<Services />} />
        <Route path="/learn-more" element={<LearnMore />} />

        
        <Route path="/income-certificate" element={<ProtectedRoute>
          <IncomeCertificate /></ProtectedRoute>} />
        
        <Route path="/caste-certificate" element={<ProtectedRoute>
          <CasteCertificate /></ProtectedRoute>} />

        <Route path="/residence-certificate" element={<ProtectedRoute>
          <ResidenceCertificate /></ProtectedRoute>} />

        <Route path="/pan-aadhaar" element={<ProtectedRoute>
          <PanAadhaarService /></ProtectedRoute>} />

        

        
        


        <Route path="/contact" element={<Contact />} />
        
        <Route path="/dashboard" element={<ProtectedRoute>
                                             <Dashboard />
                                             </ProtectedRoute>} />

        <Route path="/birth-certificate" element={<ProtectedRoute>
                                             <BirthCertificate />
                                             </ProtectedRoute>} />

        <Route path="/request-history" element={<ProtectedRoute>
                                             <RequestHistory />
                                             </ProtectedRoute>} />

        <Route path="/admin" element={<AdminRoute>
                                             <AdminPanel />
                                             </AdminRoute>} />
                                     

        


        



      </Routes>

    </BrowserRouter>

     
    
  );
}



export default App;
