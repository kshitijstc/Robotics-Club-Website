import PropTypes from "prop-types";

const ROTitle = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[3px] box-border max-w-full gap-5 text-left text-29xl text-black font-trap mq1350:flex-wrap ${className}`}
    >
      <h1 className="m-0 relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] mq925:text-19xl mq450:text-10xl">
        RO
      </h1>
      <div className="w-[884px] flex flex-row items-start justify-start gap-[292px] max-w-full text-right text-9xl font-tt-hoves mq925:gap-[146px] mq925:flex-wrap mq450:gap-[73px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[69.5px] max-w-full mq925:flex-wrap mq450:gap-[35px]">
          <div className="relative tracking-[-0.02em] inline-block min-w-[109px] mq450:text-3xl">
            About us
          </div>
          <div className="relative tracking-[-0.02em] inline-block min-w-[87px] mq450:text-3xl">
            Project
          </div>
          <div className="relative tracking-[-0.02em] inline-block min-w-[86px] mq450:text-3xl">
            Gallery
          </div>
        </div>
        <div className="border-red border-[3px] border-solid flex flex-row items-start justify-start py-1.5 pl-[22px] pr-[15px]">
          <div className="w-[131px] relative tracking-[-0.02em] inline-block shrink-0 mq450:text-3xl">
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

ROTitle.propTypes = {
  className: PropTypes.string,
};

export default ROTitle;
