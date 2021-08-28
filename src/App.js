import "./sass/main.css";
import React from "react";
import Navbar from "./shared/Navbar";
import Header from "./Header";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import ToursSection from "./ToursSection/ToursSection";
import StoriesSection from "./StoriesSection/StoriesSection";
import BookSection from "./BookSection";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
      <StoriesSection />
      <BookSection />
      <Footer />
    </>
  );
};

export default App;
