import React from "react";
const Logo = "static/assests/logosaas.png";
import SocialX from "@/assests/social-x.svg";
import SocialLinkedIn from "@/assests/social-linkedin.svg";
import SocialInsta from "@/assests/social-insta.svg";
import SocialPin from "@/assests/social-pin.svg";
import SocialYoutube from "@/assests/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <img src={Logo} alt="SaaS logo" width={40} className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customer</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Carrers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialLinkedIn />
          <SocialInsta />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Your Company Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
