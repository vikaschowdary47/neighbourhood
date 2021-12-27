import React from "react";
import Intro from "../assets/intro.png";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="intro-container">
      {/* <Image src={Intro} /> */}
      <img src="/intro.png" alt="intro" />
    </div>
  );
};

export default Introduction;
