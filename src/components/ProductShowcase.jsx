import React, { useRef } from "react";
const ProductImage =  "static/assests/product-image.png"
const Pyramid =  "static/assests/pyramid.png"
const TubeImage =  "static/assests/tube.png"
import { motion,useScroll,useTransform } from "framer-motion"


export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })
  const translateY = useTransform(scrollYProgress,[0,1],[-150,150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>

          </div>
          <h2 
            className="section-title mt-5"
          >
            A more effective way to track your progress
          </h2>
          <p 
            className="section-description mt-5"
          >
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <img src={ProductImage} alt="Product image" className="mt-10"/>
          <motion.img 
            src={Pyramid} 
            alt="Pyramid image" 
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32 "
            style={{
              translateY:translateY
            }}
          />
          <motion.img style={{
            translateY:translateY
          }} src={TubeImage} alt="TubeImage image" width={248} className="hidden md:block absolute bottom-24 -left-36"/>
        </div>
      </div>
    </section>
  );
};
