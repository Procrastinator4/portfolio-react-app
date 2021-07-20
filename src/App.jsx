import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Mastery from "../components/Mastery";
import Resources from "../components/Resources";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Mastery />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
