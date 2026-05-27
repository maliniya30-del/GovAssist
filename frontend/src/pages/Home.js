import React from "react";
import MainSection from "../components/MainSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";





function Home(){
    return(
        <div >
            <MainSection />
            <ServicesSection />
            <AboutSection />
            <WhyChooseUs />
            <Footer />
            
        </div>
    );
}
export default Home;