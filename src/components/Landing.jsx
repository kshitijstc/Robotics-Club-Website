import PropTypes from "prop-types";
import { useState,useEffect } from "react";

const Landing = ({ className = "" }) => {

  const [isFixed, setIsFixed] = useState(true); // Track whether the image should be fixed

  useEffect(() => {
    const target = document.getElementById("landing-end");
    const image = document.getElementById("fixed-image");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the landing page ends, change the image to absolute positioning
          image.style.position = "absolute";
          image.style.top = "auto";  // Reset the fixed top positioning
          image.style.bottom = "0";  // Stick it at the bottom of the landing section
        } else {
          // While the landing page is in view, keep the image fixed
          image.style.position = "fixed";
          image.style.top = "64px";  // Original fixed position
          image.style.bottom = "auto";  // Remove bottom if set before
        }
      },
      {
        root: null, // Observing within the viewport
        threshold: 0, // Trigger when any part of the target is visible
      }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  


  return (
    <section
      className={`self-stretch h-[1921px] bg-gainsboro-200 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-[70px] pb-[61px] box-border max-w-full text-left text-154xl text-black font-trap mq1350:pl-[35px] mq1350:pr-[35px] mq1350:pb-5 mq1350:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <h1 className="!m-[0] w-[724px] absolute top-[421px] left-[45px] text-inherit tracking-[-0.02em] font-semibold font-[inherit] text-right inline-block z-[1] mq925:text-50xl mq450:text-24xl">
          Robotics
        </h1>
        <h1 className="!m-[0] w-[510px] absolute bottom-[257px] left-[45px] text-73xl tracking-[-0.02em] font-semibold font-[inherit] inline-block z-[1] mq925:text-27xl mq450:text-9xl">
          What’s that
        </h1>
        <header className="flex-1 flex flex-row items-start justify-between gap-5 max-w-full text-left text-29xl text-black font-trap">
          <div className="w-[604px] flex flex-col items-start justify-start pt-6 pb-0 pl-0 pr-5 box-border max-w-full">
            <a className="[text-decoration:none] relative tracking-[-0.02em] font-semibold text-[inherit]">
              RO
            </a>
          </div>
          <div className="h-[1860px] bg-red flex flex-row items-start justify-start py-6 px-4 box-border max-w-full z-[1]">
            <div className="h-[1860px] w-[450px] relative bg-red hidden max-w-full" />
            <nav className="m-0 w-[418px] flex flex-row items-start justify-between gap-5 max-w-full z-[2] text-right text-9xl text-black font-tt-hoves mq1350:hidden">
              <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] inline-block min-w-[109px]">
                About us
              </a>
              <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] inline-block min-w-[87px]">
                Project
              </a>
              <a className="[text-decoration:none] relative tracking-[-0.02em] text-[inherit] inline-block min-w-[86px]">
                Gallery
              </a>
            </nav>
          </div>
          <div className="h-[77px] w-[174px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border text-right text-9xl font-tt-hoves">
            <div className="self-stretch flex-1 border-red border-[3px] border-solid flex flex-row items-start justify-start py-1.5 pl-[22px] pr-[15px]">
              <a className="[text-decoration:none] w-[131px] relative tracking-[-0.02em] text-[inherit] inline-block shrink-0">
                Contact us
              </a>
            </div>
          </div>
        </header>
        <h1 className="!m-[0] w-[394px] absolute top-[562px] left-[507px] text-inherit tracking-[-0.02em] font-semibold font-[inherit] text-gainsboro-200 inline-block mix-blend-difference z-[3] mq925:text-50xl mq450:text-24xl">
          Club
        </h1>
        <h1 className="!m-[0] h-[190px] w-[352px] absolute top-[421px] right-[55px] text-inherit tracking-[-0.02em] font-semibold font-[inherit] inline-block z-[3] mq925:text-50xl mq450:text-24xl">
          IIT.G
        </h1>
        <div className="w-[559px] absolute !m-[0] bottom-[32px] left-[47px] text-5xl font-tt-hoves inline-block z-[1] mq450:text-lgi">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="h-[1954px] w-full absolute !m-[0] right-[0px] bottom-[-94px] left-[0px]">
          <img
            className="absolute top-[77px] left-[0px] w-[1780px] h-[1782.5px] mix-blend-difference"
            alt=""
            src="/vector-3.svg"
          />
         <img
          id="fixed-image"
          className="fixed top-[64px] left-[794px] w-[686px] h-[904px] object-cover z-[2]"
          loading="lazy"
          alt="Fixed Image"
          src="/image-92@2x.png"
        />
          {/* <img
            className="absolute top-[1050px] left-[794px] w-[686px] h-[904px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-92@2x.png"
          /> */}
          <img
            className="absolute top-[0px] left-[1606px] w-px h-[1921px] mix-blend-difference z-[4]"
            loading="lazy"
            alt=""
            src="/vector-9.svg"
          />
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  className: PropTypes.string,
};

export default Landing;
