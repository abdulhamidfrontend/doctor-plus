import Card1 from "../../../assets/card1.png";
import Card2 from "../../../assets/card2.png";
import Card3 from "../../../assets/card3.png";
import Card4 from "../../../assets/card4.png";
import Card5 from "../../../assets/card5.png";
import Card6 from "../../../assets/card6.png";
import { FaWhatsapp } from "react-icons/fa";

const Projects = () => {
  const allCards = [
    {
      img: Card1,
      title: "General",
      descriptions:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    },
    {
      img: Card2,
      title: "Pediatrics",
      descriptions:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    },
    {
      img: Card3,
      title: "Nutritional",
      descriptions:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    },
    {
      img: Card4,
      title: "Cardiology",
      descriptions:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    },
    {
      img: Card5,
      title: "Ophthalmology",
      descriptions:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    },
    {
      img: Card6,
      title: "Orthopedics",
      descriptions:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
    },
  ];

  return (
    <div>
      <div className="cards grid grid-cols-3 max-[1290px]:grid-cols-2 w-fit mx-auto! max-[840px]:grid-cols-1 gap-6">
        {allCards.map((card, i) => (
          <div
            key={i}
            className="card max-[450px]:w-[90%] max-[380px]:w-full max-[450px]:m-auto! w-[346px] hover:scale-103 hover:shadow-2xl transition duration-300  p-8! shadow-xl rounded-[24px]  bg-white"
          >
            <div className="flex items-center w-full h-[200px] max-[410px]:h-40 max-[380px]:h-35  justify-center ">
              <img src={card.img} alt="" />
            </div>
            <div className=" ">
              <h1 className="font-medium max-[450px]:text-[18px]  mt-6! mb-3! text-[24px] leading-[87%] ">
                {card.title}
              </h1>
              <p className="text text-[14px] max-[450px]:text-xs  mb-6! font-normal ">
                {card.descriptions}
              </p>
              <button className="btn flex max-[450px]:text-[14px] max-[420px]:text-xs items-center gap-2 w-full">
                <FaWhatsapp size={24} />
                Book an Appoinment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
