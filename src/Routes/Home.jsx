import React from "react";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Skills/>
    </div>
  );
};

export default Home;
