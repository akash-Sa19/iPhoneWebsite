import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    // in react it is imp to clear our event listner
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  // animation
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2.5,
      y: -50,
    });
  }, []);

  return (
    <section className="relative w-full bg-black nav-heigth">
      <div className="flex-col w-full h-5/6 flex-center">
        <p
          className="hero-title"
          id="hero"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/10">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>
        </div>

        <div
          className="flex flex-col items-center translate-y-20 opacity-0"
          id="cta"
        >
          <a
            href="#highlights"
            className="btn"
          >
            Buy
          </a>
          <p className="text-xl font-normal">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
