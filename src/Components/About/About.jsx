import React from "react";

const About = () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <div className="display-3 text-center">
        About <span className="text-primary">Me!</span>
      </div>
      <div className="d-flex flex-wrap justify-content-around align-items-center py-5 ">
        <section>
          <img height="250px" width="250px" src="https://i.ibb.co/3rb6378/jk.jpg" alt="" />
        </section>
        <section className="w-50 pt-5">
          Hello, This is Mohammad Jakaria. I’m a professional Digital Marketer
          and SEO Expert. I’ve more than “Two Years” of experience in this field
          of Digital Marketing. I'm also a Graphic Designer. I'm working on
          Fiverr, Freelancer, and Upwork since 2022. I completed my Online
          course in Social Media Marketing, Search Engine Optimization (SEO),
          Google Ads, WordPress, Graphic Design, and so on, And working.
          <br />
          <br />
          I'm an Expert on:
          <br />
          <br />
          Social Media Marketing, YouTube Marketing, Search Engine
          Optimization(SEO), Google Ads, YouTube SEO, Search Engine Marketing
          (SEM), Google Merchant Center, Keyword Research, Chatbot Development,
          Spotify Music Promote, and Shopify.
        </section>
      </div>
    </div>
  );
};

export default About;
