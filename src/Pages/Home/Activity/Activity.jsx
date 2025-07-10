import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbCirclePlus } from "react-icons/tb";

const Activity = () => {
  return (
    <div className="cards mb-[-38px]! max-[1047px]:flex-wrap max-[1047px]:mb-0! max-[1047px]:pb-10! flex items-center justify-center gap-6.5">
      <div className=" bg-[#4976f7] w-fit max-[450px]:w-full rounded-xl text-white py-2! flex items-center gap-3 px-4.5!">
        <div className="left">
          <MdOutlineAccessTime size={36} />
        </div>
        <div className="right ">
          <h1 className="text-[18px] font-semibold">24 hour service</h1>
          <p className="text-xs opacity-80 font-normal">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className=" bg-[#4976f7] w-fit max-[450px]:w-full rounded-xl text-white py-2! flex items-center gap-3 px-4.5!">
        <div className="left">
          <IoMdCheckmarkCircleOutline size={36} />
        </div>
        <div className="right ">
          <h1 className="text-[18px] font-semibold">8 years of experience</h1>
          <p className="text-xs opacity-80 font-normal">
            Lorem ipsum dolor sit amet, con <br /> sectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className=" bg-[#4976f7] w-fit max-[450px]:w-full rounded-xl text-white py-2! flex items-center gap-3 px-4.5!">
        <div className="left">
          <TbCirclePlus size={36} />
        </div>
        <div className="right ">
          <h1 className="text-[18px] font-semibold">High quality care</h1>
          <p className="text-xs opacity-80 font-normal">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
