import React from "react";
import image1 from "./../assets/Images-Snap-Scroll/Image-1.png";
import image2 from "./../assets/Images-Snap-Scroll/Image-2.png";
import image3 from "./../assets/Images-Snap-Scroll/Image-3.png";
import "./Style.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  gsap.registerPlugin(useGSAP);
  const menu=useRef();
  useGSAP(() => {
    
    gsap.from(".back-ground img", {
      duration: 2,
      delay: 0,
      scale: 1.3,
    });
    gsap.from(".heading h1", {
      duration: 1.2,
      delay: 0,
      scale: 1.3,
    });
    gsap.from(".section111", {
      delay: 0.001,
      duration: 1.2,
      scale: 1.3,
      y: 200,
    });

    const t1 = gsap.timeline();
    t1.from(".logo-1 h1", {
      duration: 1,
      delay: 2,
      opacity: 0,
      y: -50,
    });
    t1.from(".menu", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: -50,
    });

    
    const menuHover = gsap.timeline({ paused: true });
    menuHover.to(".menu ul", {
      duration: 0.5,
      delay:1,
      width: "350px",
      borderRadius: "10px",
      ease: "power2.out",
    });
    

    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseenter", () => menuHover.play());
    menu.addEventListener("mouseleave", () => menuHover.reverse());
  });
  

  return (
    <div className="container">
      <div className="back-ground">
        <img src={image1} alt="Section 1" id="section1" />
        <div className="heading">
          <h1>SREC</h1>
        </div>
        <div className="logo" id="section1">
          <img src={image2} alt="Logo" />
        </div>
        <div className="section111" id="section">
          <img src={image3} alt="Section Image" />
        </div>
        <div className="class">
          <nav>
            <div className="logo-1">
              <h1>SREC</h1>
            </div>
            <div className="menu">
              <h1>
                <BiMenuAltRight/>
              </h1>
              <ul ref={menu}>
                <li>HOME</li>
                <li>EVENTS</li>
                <li>SCHEDULE</li>
                <li>ABOUT</li>
                <li className="register">REGISTER</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
