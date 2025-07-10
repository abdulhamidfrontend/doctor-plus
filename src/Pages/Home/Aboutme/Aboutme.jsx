import AboutmeImg from "../../../assets/aboutme.png";
import { FaWhatsapp } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div className="flex py-50! max-[550px]:py-20! max-[1245px]:flex-col items-center justify-between">
      <div className="left">
        <img className="w-[486px]" src={AboutmeImg} alt="" />
      </div>
      <div className="right flex flex-col max-[1245px]:items-center  max-[1245px]:justify-center max-[1245px]:text-center max-[1245px]:py-10! max-[550px]:max-w-[90%]  gap-3.5 max-w-[500px]">
        <h1 className="font-medium text-[22px] tracking-[0.02em] text-[#00bfa5]">
          About me
        </h1>
        <h1 className="font-semibold max-[450px]:text-[26px] max-[400px]:text-[22px] text-[32px]">
          A dedicated doctor with the core mission to help
        </h1>
        <p className="font-normal max-[450px]:text-[14px] max-[400px]:text-xs text-[16px] leading-[150%] text">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
        <button className="btn flex max-[400px]:text-xs items-center gap-2 w-fit">
          <FaWhatsapp size={25} />
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Aboutme;
