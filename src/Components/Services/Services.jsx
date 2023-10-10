import { BsWordpress, BsCodeSlash } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { BiWorld, BiLogoDigitalocean } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="display-4 text-center mb-5">Expertise services</div>
      <div>
        <div className="row justify-content-center gap-5">
          <div class="flip-card service-hover p-3">
            <div class="flip-card-inner">
              <div class="flip-card-front fs-1">
                <div className="text-center ">
                  <BsWordpress />
                </div>
                Wordpress Customization
              </div>
              <div class="flip-card-back">
                <p>
                  WordPress websites, theme customization, WordPress
                  optimization, WordPress plugins, bug fixing. I can
                  professionally customize your existing theme to fit all your
                  requirements.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card service-hover p-3">
            <div class="flip-card-inner">
              <div class="flip-card-front fs-1">
                <div className="text-center ">
                  <BiWorld />
                </div>
                Web Designing
              </div>
              <div class="flip-card-back">
                <p>
                  I can professionally design stunning responsive websites using
                  HTML5, CSS3, Bootstrap, Javascript, Jquery, PHP.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card service-hover p-3">
            <div class="flip-card-inner">
              <div class="flip-card-front fs-1">
                <div className="text-center ">
                  <BsWordpress />
                </div>
                Wordpress Developing
              </div>
              <div class="flip-card-back">
                <p>
                  As a WordPress developer, I can develop your WordPress theme,
                  plugin, and whole website. I will get a fully developed
                  website
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card service-hover p-3">
            <div class="flip-card-inner">
              <div class="flip-card-front fs-1">
                <div className="text-center ">
                  <BiLogoDigitalocean />
                </div>
                Digital Marketing
              </div>
              <div class="flip-card-back">
                <p>
                  Are you a tenacious business owner or entrepreneur? & trying
                  multiple strategies to hack your growth? If yes! I can help
                  you develop a Marketing Strategy that helps you understand the
                  market in-depth and narrates easy-to-
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card service-hover p-3">
            <div class="flip-card-inner">
              <div class="flip-card-front fs-1">
                <div className="text-center ">
                  <BsCodeSlash />
                </div>
                Social Media Specialist
              </div>
              <div class="flip-card-back">
                <p>
                  Social Media is no more a choice for a Business in this
                  “Digital Era” we live in.The importance of online management
                  is obvious. As a Social Media Manager, I have helped hundreds
                  of businesses to expose themselves and their services to a
                  bigger audience, converting mostly into buyers.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card service-hover p-3">
            <div class="flip-card-inner">
              <div class="flip-card-front fs-1">
                <div className="text-center ">
                  <FaPenFancy />
                </div>
                Graphic Design
              </div>
              <div class="flip-card-back">
                <p>
                  Looking for something unique, creative, eye-catching, very
                  professional & clean design? You're in the right place! I'm an
                  Expert Graphic Designer and can do a fantastic job at your
                  request!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
