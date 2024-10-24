import Landing from "../components/Landing";
import ProjectList from "../components/ProjectList";
import ProjectsContent from "../components/ProjectsContent";
import GALLARY from "../components/GALLARY";
import ROTitle from "../components/ROTitle";
import Content from "../components/Content";
import ContactUs from "../components/ContactUs";

const Root = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Landing />
      <section className="self-stretch h-[2753px] relative bg-gray-200 overflow-hidden shrink-0 max-w-full text-left text-73xl text-red font-trap mq1825:h-auto mq1825:min-h-[2753]">
        <ProjectList />
        <ProjectsContent />
        <div className="absolute top-[1288px] left-[70px] w-[1568px] flex flex-col items-start justify-start gap-[174px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[191px] min-h-[470px] max-w-full">
            <h1 className="m-0 w-[265px] relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] inline-block mq925:text-27xl mq450:text-9xl">{`title-1 `}</h1>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full text-5xl text-white font-tt-hoves">
              <div className="h-[178px] relative inline-block max-w-full mq450:text-lgi">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, `}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq1350:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start gap-[76px] min-w-[585px] max-w-full mq925:min-w-full">
              <h1 className="m-0 w-[266px] relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] inline-block shrink-0 mq925:text-27xl mq450:text-9xl">{`title-2 `}</h1>
              <div className="w-[559px] flex flex-col items-start justify-start pt-[399px] px-0 pb-0 box-border max-w-full text-5xl text-white font-tt-hoves">
                <div className="h-[178px] relative inline-block shrink-0 mq450:text-lgi">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in urna eu dolor interdum facilisis.Lorem ipsum dolor sit amet, `}</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[644px] max-w-full text-5xl text-white font-tt-hoves mq925:min-w-full mq1350:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[564px] min-h-[816px]">
                <div className="relative mq450:text-lgi">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  in urna eu dolor interdum facilisis.Lorem ipsum dolor sit
                  amet,
                </div>
                <div className="self-stretch h-[179px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-px relative border-red border-r-[1px] border-solid box-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GALLARY />
      <section className="self-stretch h-[1080px] bg-gainsboro-200 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[34px] pb-[72px] pl-[70px] pr-[69px] box-border gap-[1.8px] max-w-full mq925:pb-5 mq925:box-border mq1350:h-auto mq1350:pt-5 mq1350:pb-[31px] mq1350:pl-[35px] mq1350:pr-[34px] mq1350:box-border">
        <ROTitle />
        <Content />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full">
          <img
            className="flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-17.svg"
          />
        </div>
      </section>
      <section className="self-stretch bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start py-0 px-[70px] box-border gap-[170px] max-w-full text-left text-[128px] text-black font-inter mq925:gap-[42px] mq1350:gap-[85px] mq1350:pl-[35px] mq1350:pr-[35px] mq1350:box-border mq1825:flex-wrap">
        <div className="w-[580px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[608px] max-w-full shrink-0 font-trap mq925:gap-[304px] mq450:gap-[152px]">
          <div className="w-[303px] h-[201px] flex flex-row items-start justify-start">
            <div className="self-stretch w-[3px] relative border-red border-r-[3px] border-solid box-border" />
          </div>
          <h1 className="m-0 w-[518px] h-[90px] relative text-inherit font-medium font-[inherit] inline-block shrink-0 max-w-full mq925:text-[51px] mq450:text-13xl">
            Benefits
          </h1>
        </div>
        <div className="w-[430px] flex flex-row items-start justify-start gap-[30px] max-w-full text-5xl">
          <div className="h-[1083px] w-[3px] relative border-red border-r-[3px] border-solid box-border mq925:hidden" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[255px] px-0 pb-0 box-border max-w-[calc(100%_-_463px)] mq925:hidden mq925:pt-[166px] mq925:box-border mq925:max-w-full mq450:pt-[108px] mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[290px] max-w-full mq450:gap-[145px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                <div className="relative font-medium mq450:text-lgi">
                  <span>{`01 `}</span>
                  <span className="text-gray-100">/ 04</span>
                </div>
                <div className="self-stretch h-[75px] relative font-medium inline-block mq450:text-lgi">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  in urna eu dolor interdum facilisis.
                </div>
              </div>
              <div className="w-[400px] flex flex-col items-start justify-start gap-[27px] max-w-full">
                <div className="relative font-medium mq450:text-lgi">
                  <span>{`01 `}</span>
                  <span className="text-gray-100">/ 04</span>
                </div>
                <div className="self-stretch h-[75px] relative font-medium inline-block mq450:text-lgi">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  in urna eu dolor interdum facilisis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[30px] max-w-full text-21xl">
          <div className="h-[1083px] w-[3px] relative border-red border-r-[3px] border-solid box-border mq925:hidden" />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[271px] box-border min-h-[768px] max-w-[calc(100%_-_463px)] shrink-0 mq925:hidden mq925:pb-44 mq925:box-border mq925:max-w-full mq450:pb-[114px] mq450:box-border">
            <div className="w-[400px] flex flex-col items-start justify-start gap-[324px] max-w-full mq450:gap-[162px]">
              <h2 className="m-0 relative text-inherit font-medium font-[inherit] mq925:text-13xl mq450:text-5xl">
                Lorem ipsum dolor sit amet
              </h2>
              <h2 className="m-0 self-stretch h-[77px] relative text-inherit font-medium font-[inherit] inline-block shrink-0 mq925:text-13xl mq450:text-5xl">
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Root;
