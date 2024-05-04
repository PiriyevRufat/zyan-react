import Header from "./components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Videosection from "./components/Videosection";
import Titrs from "./components/Titrs";
import ServiceSection from "./components/ServiceSection";
import SectionAbout from "./components/SectionAbout";
import SectionForm from "./components/SectionForm";
import BlogSection from "./components/BlogSection";
import ReviewSection from "./components/ReviewSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <HeroSection/>
    <ServiceSection/>
    <SectionAbout/>
    <SectionForm/>
    <SkillsSection/>
    <Videosection/>
    <ReviewSection/>
    <Titrs/>
    <BlogSection/>
    <SubscribeSection/>
    <Footer/>
    </React.Fragment>
  )
}

export default App
