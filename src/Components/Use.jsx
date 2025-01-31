import Tittle from "./Tittle";
import "./Home.css";
import { useEffect, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import gsap from "gsap";
import {useGSAP}from "@gsap/react";
function Use() {
  gsap.registerPlugin(ScrollTrigger);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const eventTime = new Date("March 5, 2025 00:00:00");
    const currentTime = new Date();
    const diff = eventTime - currentTime;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useGSAP(()=>{
    gsap.from("section1",{
      x:50,
      duration:20,
      delay:2,
      rotate:180,
      opacity:0,
      scrollTrigger:{
        start:"top 40%",

      }
    })
  })
  return (
    <>

    
        <div>
            <div className="section1">
            <Tittle name1={"EVENT"} name2={"2K25"} />
            </div>
            <div className="section11">
            <h3>
                <span className="event-name">EVENT 2K25</span> is a technology-focused event by the{" "}
                <span className="ece">ECE (Electronics and Communication Engineering)</span> Department
                of SREC, featuring <span className="coding-challenges">coding challenges</span>,{" "}
                <span className="hackathons">hackathons</span>, workshops, and seminars. Join us to
                learn and showcase your skills in an immersive and vibrant environment.
            </h3>
            </div>
            <div className="countdown">
            <h2>Countdown to EVENT 2K25</h2>
            <div className="countdown-timer">
                <div className="time-block">
                <p className="time-value">{timeLeft.days}</p>
                <p className="time-label">Days</p>
                </div>
                <div className="time-block">
                <p className="time-value">{timeLeft.hours}</p>
                <p className="time-label">Hours</p>
                </div>
                <div className="time-block">
                <p className="time-value">{timeLeft.minutes}</p>
                <p className="time-label">Minutes</p>
                </div>
                <div className="time-block">
                <p className="time-value">{timeLeft.seconds}</p>
                <p className="time-label">Seconds</p>
                </div>
            </div>
            </div>
            <div className="reg">
                <button>REGISTER</button>
            </div>
        </div>
        <div>
        </div>
    </>
  );
}

export default Use;
