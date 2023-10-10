import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

import { DiGoogleAnalytics } from "react-icons/di";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {BsBootstrapFill, BsBugFill} from "react-icons/bs"
import { TbSeo } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { SiDaisyui, SiExpress, SiFirebase, SiVercel } from "react-icons/si";
import { BiLogoFigma, BiLogoJavascript, BiLogoMongodb, BiLogoNetlify, BiLogoNodejs, BiLogoTailwindCss } from "react-icons/bi";
const Skills = () => {
  return (
    <div>
      <div className="display-4 text-center mb-5 pt-3">My Skills</div>
      <div className="container pt-5 ">
      <div className="fs-2 text-center fw-bold">Skills</div>
      <div className="row text-center pt-5">
        <div className="col-sm-2 col-4 fs-5">
         Digital Marketing
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div className="row text-center py-2">
        <div className="col-sm-2 col-4 fs-5">
         SEO
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div className="row text-center py-2">
        <div className="col-sm-2 col-4 fs-5">
        SEM
        </div>
        <div className="col-sm-10 col-8 fs-5">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div className="row text-center py-2 fs-5">
        <div className="col-sm-2 col-4">
        SMM
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div className="row text-center py-2">
        <div className="col-sm-2 col-4 fs-5">
        Web Analytics
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div className="row text-center py-2">
        <div className="col-sm-2 col-4 fs-5">
        Content Strategy
        </div>
        <div className="col-sm-10 col-8 fs-5">
          <ProgressBar completed={90} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
