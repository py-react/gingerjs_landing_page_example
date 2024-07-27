import React from "react";
import { twMerge } from "tailwind-merge";
const avatar1 = "static/assests/avatar-1.png";
const avatar2 = "static/assests/avatar-2.png";
const avatar3 = "static/assests/avatar-3.png";
const avatar4 = "static/assests/avatar-4.png";
const avatar5 = "static/assests/avatar-5.png";
const avatar6 = "static/assests/avatar-6.png";
const avatar7 = "static/assests/avatar-7.png";
const avatar8 = "static/assests/avatar-8.png";
const avatar9 = "static/assests/avatar-9.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({testimonials,className,animationDuration=10})=>{
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%"}}
          transition={{duration: animationDuration, repeat: Infinity, ease: "linear", repeatType:"loop"}}
        className="flex flex-col gap-6"
      >
        {new Array(2).fill(null).map((item,i)=>(
          <React.Fragment key={i}>
            {testimonials.map(({text,imageSrc,name,username})=>(
              <div key={username} className="card">
                <div>{text}</div>
                <div className="flex items-center gap-2">
                  <img src={imageSrc} alt={name} className="h-10 w-10 rounded-full"/>
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export const Testimonials = () => {
  return (
    <section className="bg-white py-0">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Testimonials
            </div>
          </div>
          <h2 className="section-title mt-5">
            What our users say
          </h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]  mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} animationDuration={15}/>
          <TestimonialsColumn testimonials={secondColumn} className={"hidden md:block"} animationDuration={19}/>
          <TestimonialsColumn testimonials={thirdColumn} className={"hidden lg:block"} animationDuration={17}/>
        </div>
      </div>
    </section>
  );
};
