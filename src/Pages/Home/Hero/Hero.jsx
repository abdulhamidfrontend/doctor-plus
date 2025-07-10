import { FaRegComment } from "react-icons/fa";
import HeroImg from "../../../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-[1100px]:gap-10 max-[1100px]:flex-col">
      <div className="left flex max-[1100px]:items-center max-[1100px]:justify-center max-[1100px]:text-center flex-col gap-6">
        <h1 className="font-medium text-[22px] max-[390px]:text-[16px] tracking-[0.02em] text-[#00bfa5]">
          Dr. Matthew Anderson
        </h1>
        <h1 className="font-bold text-[48px] max-[460px]:text-[28px] max-[390px]:text-[24px] max-[1240px]:text-[36px] max-[560px]:max-w-fit leading-[120%] max-w-[500px] ">
          A dedicated doctor you can trust
        </h1>
        <p className="font-normal max-[1240px]:text-[14px] max-[460px]:text-[12px] max-[1100px]:max-w-[500px] max-[560px]:max-w-fit max-[1240px]:max-w-[400px] text-[16px] leading-[150%] text max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          eget vel, nunc nulla feugiat. Metus ut.
        </p>
        <button className="btn flex w-fit max-[460px]:text-[14px] items-center gap-2">
          <FaRegComment />
          Book an appointment
        </button>
      </div>
      <div className="right">
        <img className="w-[678px] " src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
