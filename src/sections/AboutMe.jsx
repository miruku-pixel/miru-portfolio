import React, { useRef, useEffect } from "react";
import gsap from "gsap"; // Import GSAP
import PROFILE_PIC from "../assets/images/profile-pic.png";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  const divRef = useRef(null); // Create a ref for the div

  useEffect(() => {
    // Optional: Initial GSAP animation (e.g., fade in)
    gsap.fromTo(
      divRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(divRef.current, {
      boxShadow:
        "0 0 20px rgba(0, 123, 255, 0.9), 0 0 30px rgba(0, 123, 255, 0.7)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(divRef.current, {
      boxShadow:
        "0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 123, 255, 0.5)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div
          ref={divRef}
          className="neon-div w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-blue-100/50 rounded-3xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.SocialLinks.map((item) => (
              <a
                href={item.link}
                target="_blank"
                key={item.label}
                className="cursor-pointer group"
              >
                <item.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
