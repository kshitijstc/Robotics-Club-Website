import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ProjectsContent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[24px] left-[70px] w-[1780px] flex flex-row items-start justify-between py-0 pl-0 pr-[3px] box-border max-w-full gap-5 text-left text-29xl text-white font-trap mq1825:flex-wrap ${className}`}
    >
      <h1 className="m-0 relative text-inherit tracking-[-0.02em] font-semibold font-[inherit] mq925:text-19xl mq450:text-10xl">
        RO
      </h1>
      <div className="w-[1238px] flex flex-col items-start justify-start gap-[391px] max-w-full text-right text-9xl font-tt-hoves">
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[884px] flex flex-row items-start justify-between max-w-full gap-5 mq925:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[69.5px] max-w-full mq925:flex-wrap">
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
            <Button
              className="h-[53px]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "28",
                borderColor: "#fd1c1a",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { borderColor: "#fd1c1a" },
                height: 53,
              }}
            >
              Contact us
            </Button>
          </div>
        </div>
        <h1 className="m-0 w-[694px] relative text-154xl tracking-[-0.02em] font-semibold font-trap text-gainsboro-200 inline-block max-w-full z-[2] mq925:text-50xl mq450:text-24xl">{`Projects `}</h1>
      </div>
    </div>
  );
};

ProjectsContent.propTypes = {
  className: PropTypes.string,
};

export default ProjectsContent;
