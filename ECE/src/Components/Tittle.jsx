import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";


function Tittle({ name1, name2 }) {
 

  return (
    <>
      <div className="tittle">
        <div className="tittle-h1">
          <h1>
            {name1} 2<span>K</span>25
          </h1>
        </div>
      </div>
    </>
  );
}

export default Tittle;
