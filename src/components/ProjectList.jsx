import PropTypes from "prop-types";

const ProjectList = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[78px] left-[52px] w-[1798px] h-[2675px] ${className}`}
    >
      <img
        className="absolute top-[1px] left-[1478px] w-px h-[1209px]"
        loading="lazy"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="absolute top-[0px] left-[336px] w-px h-[1294.5px]"
        loading="lazy"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[1860px] left-[338px] w-px h-[815px]"
        loading="lazy"
        alt=""
        src="/vector-10.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1798px] h-[1002px] z-[1]"
        alt=""
        src="/group-37.svg"
      />
      <div className="absolute top-[1210px] left-[338px] bg-gainsboro-300 w-[580px] h-[467px]" />
      <img
        className="absolute top-[1210px] left-[336px] w-[582px] h-[467px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-96@2x.png"
      />
      <div className="absolute top-[1210px] left-[950px] bg-gainsboro-100 w-[531px] h-[260px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-full h-full hidden" />
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[71px] max-h-full w-[416px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-97@2x.png"
        />
      </div>
      <img
        className="absolute top-[1601px] left-[1641px] w-[34px] h-[34px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-4.svg"
      />
      <img
        className="absolute top-[2397px] left-[1648px] w-[34px] h-[34px] object-contain"
        loading="lazy"
        alt=""
        src="/arrow-4.svg"
      />
      <img
        className="absolute top-[1px] left-[1624px] w-px h-[2674px] z-[2]"
        loading="lazy"
        alt=""
        src="/vector-9-1.svg"
      />
      <div className="absolute top-[1854px] left-[336px] bg-gainsboro-300 w-[575px] h-[260px] z-[1]" />
      <img
        className="absolute top-[1854px] left-[336px] w-[584px] h-[260px] object-cover z-[2]"
        alt=""
        src="/image-99@2x.png"
      />
      <div className="absolute top-[1964px] left-[948px] bg-gainsboro-300 w-[635px] h-[467px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 w-full h-full hidden" />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-98@2x.png"
        />
      </div>
    </div>
  );
};

ProjectList.propTypes = {
  className: PropTypes.string,
};

export default ProjectList;
