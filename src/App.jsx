import { Navigate, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <div className="z-40 fixed w-screen ">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
