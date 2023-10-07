import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css";

const Banner = () => {
  const handleDownload = () => {
    const fileUrl = "Abdullah Al Numan Rahi.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "Abdullah Al Numan Rahi.pdf";

    link.click();
  };

  return (
    <div>
      <div className="p-5 text-center">
        <img
          src="https://i.ibb.co/z5nQQHJ/My-project.jpg"
          height="200px"
          width="200px"
          style={{ borderRadius: "50%" }}
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-secondary text-dark display-2">Mohammad Jakaria</p>
        <div style={{fontSize:"2.5rem"}}>
          Expert In {" "}
          <TypeAnimation
            className="animation-text "
            sequence={[
              "Digital Market specialist",
              500,
              "SEO specialist",
              500,
              "Social specialist",
              500,
              "Digital Market specialist",
              500,
              "SEO specialist",
              500,
              "Social specialist",
              500,
            ]}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="mx-auto text-center p-5">
        <section onClick={handleDownload} className="btn btn-primary btn-w ">
          Resume
        </section>
      </div>
    </div>
  );
};

export default Banner;
