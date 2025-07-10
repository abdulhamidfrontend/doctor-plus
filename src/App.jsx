import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
