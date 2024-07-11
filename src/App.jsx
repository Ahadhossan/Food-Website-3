import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Delivery from "./components/Delivery";
import About from "./components/About";
import Recipes from "./components/Recipes";
import TopCollections from "./components/TopCollections";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Delivery />
      <About/>
      <Recipes/>
      <TopCollections/>
      <Team/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
