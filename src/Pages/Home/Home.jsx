import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Aboutme from "../Home/Aboutme/Aboutme";
import Activity from "../Home/Activity/Activity";
import Hero from "../Home/Hero/Hero";
import BookAppointment from "./BookAppointment/BookAppointment";
import Comments from "./Comments/Comments";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Why from "./Why/Why";

const Home = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="w-full navbar fixed m-auto! shadow-xl z-50! right-0 top-0 left-0">
        <div className="  m-auto! w-[80%]">
          <Navbar />
        </div>
      </div>
      <div className="body w-[80%] m-auto!">
        <div className="hero my-40! z-10">
          <Hero />
        </div>
        <div className="activity">
          <Activity />
        </div>
      </div>
      <div className="aboutme bg-white">
        <div className="w-[80%] m-auto!">
          <Aboutme />
        </div>
      </div>
      <div className="body w-[80%] m-auto!">
        <div>
          <Services />
        </div>
        <div className="py-15!">
          <Projects />
        </div>
      </div>
      <div className="BookAppointment aboutme bg-white">
        <div className="w-[80%]  m-auto!">
          <div className="py-35! max-[600px]:py-15!">
            <BookAppointment />
          </div>
          <div className="py-35!  max-[600px]:py-10!">
            <Why />
          </div>
        </div>
      </div>
      <div className="body body w-[80%] m-auto!">
        <div className="comments py-25!">
          <Comments />
        </div>
      </div>
      <div className="footer  bg-[#1678f2]">
        <div className="w-[80%] m-auto!">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
