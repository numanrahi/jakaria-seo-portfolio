import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../../../public/animation_lnm05ws9.json";
const Skills = () => {
  return (
    <div>
      <div className="display-4 text-center mb-5 pt-3">My Skills</div>
      <div className="container pt-5 ">
        <div className="fs-2 text-center fw-bold">Skills</div>
        <section>
          <Lottie
          className="mx-auto lottie"
            loop
            animationData={lottieJson}
            play
          />
        </section>
        <section className="fs-5">
          <div className="d-flex align-items-center text-center pt-5">
            <div className="col-sm-2 col-4 fs-5">Digital Marketing</div>
            <div className="col-sm-10 col-8">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">SEO</div>
            <div className="col-sm-10 col-8">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">SEM</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4">SMM</div>
            <div className="col-sm-10 col-8">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Web Analytics</div>
            <div className="col-sm-10 col-8">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Content Strategy</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Copywriting</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Email Campaigns</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">
              Conversion Rate Optimization
            </div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Social Paid Advertising</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Writing & Editing</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Excel</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Google Ad words</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">HTML</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">CSS</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
          <div className="d-flex align-items-center text-center py-2">
            <div className="col-sm-2 col-4 fs-5">Influencer Marketing</div>
            <div className="col-sm-10 col-8 fs-5">
              <ProgressBar completed={90} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
