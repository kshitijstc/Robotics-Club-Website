import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`w-[1699px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-right text-154xl text-black font-trap ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start min-h-[918px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[917.5px] w-[1493.5px] relative max-w-full">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[566.5px] max-h-full w-[355.5px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
            <img
              className="absolute top-[346.5px] left-[0px] w-[1493.5px] h-px object-contain z-[2]"
              alt=""
              src="/vector-14.svg"
            />
            <img
              className="absolute top-[572.5px] left-[0px] w-[1493.5px] h-px object-contain z-[2]"
              alt=""
              src="/vector-14.svg"
            />
          </div>
        </div>
        <div className="w-[652px] flex flex-row items-start justify-start relative max-w-full mt-[-534.5px]">
          <img
            className="h-[922px] w-[1773px] absolute !m-[0] top-[-383px] left-[-1042.5px]"
            alt=""
            src="/group-39.svg"
          />
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] inline-block max-w-full z-[1] mq925:text-50xl mq450:text-24xl">
            Tag line
          </h1>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
