import React from "react";
const acmelogo  = 'static/assests/logo-acme.png';
const quantumlogo  = 'static/assests/logo-quantum.png';
const echoLogo  = 'static/assests/logo-echo.png';
const celestiallogo  = 'static/assests/logo-celestial.png';
const pulseLogo  = 'static/assests/logo-pulse.png';
const  apexLogo = 'static/assests/logo-apex.png';
import { motion } from "framer-motion"


export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div 
            animate={{
              translateX:"-50%"
            }} 
            transition={{
              duration:20,
              repeat:Infinity,
              ease:"linear",
              repeatType:"loop"
            }}
            className='flex gap-14 flex-none pr-14'
          >
            {new Array(2).fill(null).map((item,index)=>(
              <React.Fragment key={index}>
                <img src={acmelogo} alt={"Acmelogo image"}  className='logo-ticker-image'/>
                <img src={quantumlogo} alt={"Quantumlogo image"}  className='logo-ticker-image'/>
                <img src={echoLogo} alt={"Echologo image"}  className='logo-ticker-image'/>
                <img src={celestiallogo} alt={"Celestiallogo image"}  className='logo-ticker-image'/>
                <img src={pulseLogo} alt={"Pulselogo image"}  className='logo-ticker-image'/>
                <img src={apexLogo} alt={"Apexlogo image"}  className='logo-ticker-image'/>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
