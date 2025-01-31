import "./Section.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function Section2() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const t1 = gsap.timeline();
        t1.to(".scroll h1", {
            Transform:"translateX(-430%)",
            duration:2,
            delay:1,
            scrollTrigger:{
            trigger:".scroll h1",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true,

        }
            
        });
    });

    return (
        <div className="scroll">
            <h1>REGISTER TO PARTICIPATE</h1>
        </div>
    );
}

export default Section2;
