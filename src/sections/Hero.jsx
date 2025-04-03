import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LOGO from "../assets/images/logo.png";
import { Link } from "react-scroll";
import { TEXT_ROTATE } from "../utils/data";

const RotatingText = ({ interval = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % TEXT_ROTATE.length
          );
          gsap.fromTo(
            textRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.1 }
          );
        },
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return <span ref={textRef}>{TEXT_ROTATE[currentTextIndex]}</span>;
};

const Hero = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    /* gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: 50, scale: 0.8 }, // From
      { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "power3.out" } // To
    );*/
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -100, scale: 0.5 }, // Start state
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" } // End state
    );
  }, []);

  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-2xl lg:text-3xl font-medium text-black font-gidole">
            Hello, I'm Hengki |{" "}
            <span className="font-kanit text-2xl lg:text-3xl">
              <RotatingText />
            </span>
          </h3>
          <h1
            className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px]
          mt-3 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"
          >
            Building Scalable & User-Centric Web Experiences
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I specialize in crafting clean, efficient, and user-friendly
            applications using modern technologies like React and Next.js. My
            focus is on creating intuitive, high-performance solutions that
            enhance user experience.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link
              to="projects"
              spy
              offset={-100}
              smooth={true}
              duration={500}
              aria-label="Go to Project section"
            >
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim cursor-pointer px-6 py-3 ">
                Explore My Projects
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] rounded-4xl relative order-1 lg:order-2">
          <img ref={logoRef} src={LOGO} alt="Logo" className="rounded-4xl" />
          {/*
          <img
            src={ICON_1}
            alt="Icon 1"
            className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
          />

          <img
            src={ICON_2}
            alt="Icon 2"
            className="icon-img -left-5 md:left-10 -bottom-2 rotate-[2.75deg]"
          />

          <img
            src={ICON_3}
            alt="Icon 3"
            className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"
          />

          <img
            src={ICON_4}
            alt="Icon 4"
            className="icon-img left-[200px] md:left-[255px] -bottom-9 md:bottom-10 rotate-[4.75deg]"
          />
             */}
        </div>
      </div>
      {/*
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
       */}
    </section>
  );
};

export default Hero;
