import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1
            id="title"
            className="section-heading"
          >
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img
                src={watchImg}
                alt="watch"
                className="mt-1 ml-2"
              />
            </p>
            <p className="link">
              Watch the event
              <img
                src={rightImg}
                alt="right"
                className="mt-1.5 ml-2"
              />
            </p>
          </div>
        </div>

        {/* custom videoCarousel */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
