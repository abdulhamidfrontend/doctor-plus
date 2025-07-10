import WhiteLogo from "../../assets/whitelogo.png";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-white px-4 pt-8 pb-4">
      <div className="border-b py-13! flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="logo flex flex-col items-center md:items-start gap-3 text-center md:text-left w-full md:w-auto">
          <img className="w-[120px]" src={WhiteLogo} alt="Logo" />
          <i className="italic font-light text-[14px] leading-snug">
            8 W. South St.Buford, GA 30518 <br /> 5 Briarwood Lane Vienna, VA
            22180 RER
          </i>
          <div className="icons flex mt-2! items-center justify-center gap-5">
            <FiYoutube size={24} />
            <FaFacebook size={24} />
            <FaWhatsapp size={24} />
          </div>
        </div>

        <div className="info flex flex-col items-center md:items-start gap-2 w-full md:w-auto text-center md:text-left">
          <h1 className="font-semibold text-[18px] mb-2!">Company Info</h1>
          <Link to={"/"}>
            <p className="opacity-80 text-[14px] font-normal">About</p>
          </Link>
          <Link to={"/"}>
            <p className="opacity-80 text-[14px] font-normal">Services</p>
          </Link>
          <Link to={"/"}>
            <p className="opacity-80 text-[14px] font-normal">Blog</p>
          </Link>
        </div>

        <div className="booknow flex flex-col items-center md:items-start gap-2 w-full md:w-auto text-center md:text-left">
          <h1 className="font-semibold text-[18px] mb-2!">Book Now</h1>
          <Link to={"/"}>
            <p className="opacity-80 text-[14px] font-normal">Appointment</p>
          </Link>
        </div>

        <div className="contact flex flex-col items-center md:items-start gap-2 w-full md:w-auto text-center md:text-left">
          <h1 className="font-semibold text-[18px] mb-2!">Contact</h1>
          <a
            className="font-normal text-[14px] opacity-80"
            href="tel:+1123456789"
          >
            +1 123456789
          </a>
          <a
            className="font-normal text-[14px] opacity-80"
            href="mailto:remmcal@mail.com"
          >
            remmcal@mail.com
          </a>
          <a
            className="font-normal text-[14px] opacity-80"
            href="tel:+1123456789"
          >
            Phone: +1 123456789
          </a>
        </div>
      </div>

      <div className="bottom mt-6">
        <h1 className="font-normal text-white text-[13px] opacity-70 py-10! text-center">
          © Doctor all rights 2023 - Designed by remmcal
        </h1>
      </div>
    </div>
  );
};

export default Footer;
