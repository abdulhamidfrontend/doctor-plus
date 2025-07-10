import { FaWhatsapp } from "react-icons/fa";
import ServicesImg from "../../../assets/services.png";

const Services = () => {
  return (
    <div className="flex max-[1100px]:flex-col max-[1100px]:gap-10 py-20! items-center justify-between">
      <div className="left max-[1100px]:items-center max-[1100px]:justify-center max-[1100px]:text-center max-[500px]:max-w-full flex flex-col gap-4.5 max-w-[500px]">
        <h1 className="font-medium text-[22px] tracking-[0.02em] text-[#00bfa5]">
          Services
        </h1>
        <h3 className="font-semibold max-[450px]:text-[26px] max-[400px]:text-[22px] text-[32px] ">
          Experienced in multiple medical practices
        </h3>
        <p className="text font-normal max-[450px]:text-[14px] max-[400px]:text-xs text-[16px] leading-[150%]">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra turpis habitant eu sociis fermentum felis.
        </p>
        <button className="btn w-fit flex max-[400px]:text-[14px] items-center gap-2">
          <FaWhatsapp />
          Book an appintment
        </button>
      </div>
      <div className="right">
        <img
          className="w-[627px] max-[1100px]:w-[500px] m-auto!"
          src={ServicesImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Services;
