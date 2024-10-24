import PropTypes from "prop-types";

const GALLARY = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start pt-0 px-[70px] pb-[75px] box-border gap-3 max-w-full text-left text-5xl text-black font-tt-hoves mq925:pb-8 mq925:box-border mq1350:pl-[35px] mq1350:pr-[35px] mq1350:pb-[49px] mq1350:box-border mq1825:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border gap-[73px] max-w-full mq925:gap-9 mq450:gap-[18px]">
        <div className="w-[1262px] h-[268px] flex flex-row items-start justify-start gap-[263px] max-w-full mq925:gap-[66px] mq450:gap-[33px] mq1350:gap-[131px] mq1350:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[81px] max-w-full mq925:gap-10 mq925:min-w-full mq450:gap-5">
            <div className="w-[645px] flex flex-row items-start justify-start max-w-full">
              <img
                className="h-[142px] w-[3px] relative"
                loading="lazy"
                alt=""
                src="/vector-10-1.svg"
              />
            </div>
            <div className="self-stretch h-[45px] relative leading-[28px] inline-block shrink-0 mq450:text-lgi">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum `}</div>
          </div>
          <div className="w-[269px] flex flex-col items-start justify-start pt-[54px] px-0 pb-0 box-border text-73xl text-red font-trap mq1350:flex-1">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] mq925:text-27xl mq450:text-9xl">{`title-3 `}</h1>
          </div>
        </div>
        <div className="bg-dodgerblue flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full mq1350:pl-[31px] mq1350:pr-[31px] mq1350:box-border">
          <div className="self-stretch w-[1330px] relative bg-dodgerblue hidden max-w-full" />
          <img
            className="w-[1205px] relative max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-100@2x.png"
          />
        </div>
      </div>
      <div className="h-[995px] flex flex-row items-start justify-start">
        <div className="h-[535px] flex flex-col items-start justify-start pt-[269px] px-0 pb-0 box-border">
          <div className="w-px flex-1 relative border-white border-r-[1px] border-solid box-border" />
        </div>
        <div className="self-stretch w-[3px] relative border-red border-r-[3px] border-solid box-border ml-[-1px]" />
      </div>
      <div className="w-[415px] flex flex-col items-start justify-start gap-[416px] max-w-full shrink-0 mq450:gap-52">
        <div className="self-stretch flex flex-col items-start justify-start gap-[94px] min-h-[522px] mq450:gap-[47px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <img
              className="h-[250px] w-0 relative"
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
          <div className="self-stretch h-[178px] relative inline-block shrink-0 mq450:text-lgi">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, `}</div>
        </div>
        <div className="w-80 flex flex-row items-start justify-start pt-0 px-0 pb-[30.8px] box-border gap-6 text-red">
          <div className="h-[17px] w-[262px] relative inline-block shrink-0 mq450:text-lgi">{`Check out more projects `}</div>
          <div className="h-[17px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
            <img
              className="w-[35px] h-[36.8px] relative"
              loading="lazy"
              alt=""
              src="/arrow-5-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

GALLARY.propTypes = {
  className: PropTypes.string,
};

export default GALLARY;
