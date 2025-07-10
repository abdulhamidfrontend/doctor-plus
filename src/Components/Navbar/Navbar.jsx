import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="py-4!   flex items-center   justify-between   ">
      <div className="logo">
        <img
          className="w-[146px] max-[500px]:w-[120px] mt-[-20px]! max-[500px]:mt-[-15px]!"
          src={Logo}
          alt=""
        />
      </div>
      <div className="links max-[809px]:hidden flex gap-5 items-center">
        <Link to="/">
          <h1 className="font-normal text-[16px]  text   ">Home</h1>
        </Link>
        <Link to="/">
          <h1 className="font-normal text-[16px]  text  ">About</h1>
        </Link>
        <Link to="/">
          <h1 className="font-normal text-[16px]  text  ">Services</h1>
        </Link>
        <Link to="/">
          <h1 className="font-normal text-[16px]  text  ">Contact</h1>
        </Link>
      </div>
      <div className="actions flex items-center gap-5">
        <button onClick={toggleMenu} className="hidden text max-[809px]:block">
          <IoMenu size={25} />
        </button>
        <button className="btn max-[809px]:hidden flex items-center cursor-pointer gap-2">
          {" "}
          <FaRegComment />
          Book Now
        </button>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded text  hover:scale-105 cursor-pointer  active:scale-100  transition duration-300  "
        >
          {theme === "light" ? (
            <Moon size={20} color="#6C87AE" />
          ) : (
            <Sun size={20} />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[90%] max-w-sm  menu    shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute  top-5 right-5 "
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose className="text-2xl text-[#6C87AE]" />
        </button>
        <div className="uppercase flex flex-col items-center gap-5 justify-center h-full">
          <Link to="/">
            <h1 className="text">Home</h1>
          </Link>
          <Link to="/">
            <h1 className="text">About</h1>
          </Link>
          <Link to="/">
            <h1 className="text">Services</h1>
          </Link>
          <Link to="/">
            <h1 className="text">Contact</h1>
          </Link>
          <button className="btn  flex items-center justify-center cursor-pointer gap-2">
            {" "}
            <FaRegComment />
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
