
import React ,{useRef} from "react";
import ArrowRight from "@/assests/arrow-right.svg"
const StarImage = "static/assests/star.png"
const SpringImage = "static/assests/spring.png"
import { motion,useScroll,useTransform } from "framer-motion"

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })
  const translateY = useTransform(scrollYProgress,[0,1],[-150,150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container ">
            <div className="section-heading relative">
                <h2 className="section-title">Sign up for free today</h2>
                <p className="section-description mt-5">
                  Celebrate the joy of acomplishment with an app designed to track your progress and motivate your efforts.
                </p>
                <motion.img style={{translateY:translateY}} src={StarImage} alt="StarImage" width={360} className="absolute lg:-left-[550px] -left-[350px] -top-[137px]" />
                <motion.img style={{translateY:translateY}} src={SpringImage} alt="SpringImage" width={360} className="absolute lg:-right-[531px] -right-[331px] -top-[19px]"  />
            </div>
            <div className="flex gap-2 mt-10 justify-center">
                <button className="btn btn-primary">Get for free</button>
                <button className="btn btn-text gap-1">
                  <span>Learn more</span>
                  <ArrowRight  className="h-4 w-4 inline-flex justify-center "/>
                </button>
            </div>
      </div>
    </section>
  );
};
