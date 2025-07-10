import WhyVideo from "../../../assets/why.mp4";
import posterimg from "../../../assets/poster.png";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbCirclePlus } from "react-icons/tb";

const Why = () => {
  return (
    <div>
      <div className="title">
        <h1 className="font-medium text-[22px] tracking-[0.02em] text-center text-[#00bfa5]">
          Why Dr. Matthew Anderson?
        </h1>
      </div>
      <div className="body mt-4.5! items-center justify-center text-center flex flex-col gap-4.5">
        <video
          controls
          muted
          poster={posterimg}
          className="w-full "
          src={WhyVideo}
        ></video>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[32px] max-[400px]:text-[22px] max-[501px]:text-2xl text-center">
            A dedicated doctor with the core mission to help
          </h1>
          <p className="max-w-[843px] text font-normal max-[700px]:max-w-full max-[400px]:text-xs max-[501px]:text-[14px] text-[16px] leading-[150%]">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
            nullam lobortis. Vulputate tortor tincidun.
          </p>
          <div className="flex flex-wrap items-center  justify-center gap-6 mt-5!">
            <div className=" bg-[#4976f7] w-fit max-[400px]:w-full rounded-xl max-[450px]:w-full text-white py-5! flex items-center gap-3 px-4.5! ">
              <div className="left">
                <MdOutlineAccessTime size={36} />
              </div>
              <div className="right ">
                <h1 className="text-[18px] font-semibold max-[450px]:text-[14px]">
                  +15 years of experience
                </h1>
              </div>
            </div>
            <div className=" bg-[#4976f7] w-fit max-[400px]:w-full rounded-xl max-[450px]:w-full text-white py-5! flex items-center gap-3 px-4.5!">
              <div className="left">
                <IoMdCheckmarkCircleOutline size={36} />
              </div>
              <div className="right ">
                <h1 className="text-[18px] font-semibold max-[450px]:text-[14px]">
                  Urgent 24 hour service
                </h1>
              </div>
            </div>
            <div className=" bg-[#4976f7] w-fit max-[400px]:w-full rounded-xl max-[450px]:w-full text-white py-5! flex items-center gap-3 px-4.5!">
              <div className="left">
                <TbCirclePlus size={36} />
              </div>
              <div className="right ">
                <h1 className="text-[18px] font-semibold max-[450px]:text-[14px]">
                  High quality care
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
