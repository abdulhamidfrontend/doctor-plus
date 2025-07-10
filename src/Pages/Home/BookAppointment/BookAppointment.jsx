import { FaWhatsapp } from "react-icons/fa";

const BookAppointment = () => {
  return (
    <div>
      <div className="title mb-3!">
        <h1 className="font-medium text-[22px] max-[450px]:text-[20px] tracking-[0.02em] text-center text-[#00bfa5]">
          Book an Appointment
        </h1>
      </div>
      <div className="body rounded-4xl max-[400px]:px-5! max-[600px]:px-10! max-[600px]:py-10! py-21! px-20! flex items-center flex-col justify-center text-center bg-[#4976f7]">
        <h1 className="font-semibold text-white text-[32px] max-[450px]:text-[18px] max-[600px]:text-2xl">
          Schedule a virtual or presential appointment today
        </h1>
        <h3 className="font-normal text-[16px] text-white leading-[150%] max-[450px]:text-xs max-[600px]:text-[14px] max-w-[676px] opacity-80 mt-3! mb-6!">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra turpis habitant eu sociis fermentum felis.
        </h3>
        <button className="rounded-[100px] max-[500px]:w-full justify-center  max-[400px]:text-xs max-[526px]:text-[14px]  whitebtn flex items-center gap-2 bg-[#fff] px-[28px]! py-[16px]! ">
          <FaWhatsapp size={18} />
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
