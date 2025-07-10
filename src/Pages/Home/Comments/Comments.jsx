import Comment1 from "../../../assets/comment1.png";
import Comment2 from "../../../assets/comment2.png";
import Comment3 from "../../../assets/comment3.png";
import Comment4 from "../../../assets/comment4.png";

const Comments = () => {
  const allComments = [
    {
      img: Comment1,
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Samy White",
      job: "Cardiology Patient",
    },
    {
      img: Comment2,
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Arthur Northon",
      job: "Nutrion Patient",
    },
    {
      img: Comment3,
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Kevin Smith",
      job: "Orthopedics Patient",
    },
    {
      img: Comment4,
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Amanda Jackson",
      job: "Ophthalmology Patient",
    },
  ];
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="title max-w-[676px] max-[600px]:max-w-fit flex flex-col gap-4 mb-15!  text-center">
        <h1 className="font-semibold max-[501px]:text-[26px] max-[400px]:text-[22px] text-[32px] ">
          What our great customers say about Dr. Matthew Anderson
        </h1>
        <h3 className="font-normal text-[16px] max-[500px]:text-[14px] max-[400px]:text-xs text leading-[150%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </h3>
      </div>
      <div className="body">
        <div className="grid grid-cols-2 max-[1145px]:grid-cols-1 w-fit m-auto! gap-6.5">
          {allComments.map((comment, i) => (
            <div key={i} className="">
              <div className=" w-[469px] rounded-[32px]  max-[600px]:w-[100%] hover:scale-103 transition duration-300 hover:shadow-2xl card shadow-xl py-4.5! px-6.5! ">
                <i className="font-light max-[400px]:text-xs max-[500px]:text-[14px] text-[16px] ">
                  {comment.descriptions}
                </i>
                <div className="flex mt-2! items-center gap-2">
                  <div className="left">
                    <img
                      className="w-12 max-[500px]:w-8"
                      src={comment.img}
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <h1 className="font-medium text-[18px] max-[500px]:text-[16px]  text-[#00bfa5]">
                      {comment.name}
                    </h1>
                    <p className="text font-normal text-[12px]">
                      {comment.job}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
