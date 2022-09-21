import WelcomeElement from "../components/WelcomeElement";
import wallpaper from "../assets/wallpaper.jpg";
import About from "./About";
import Services from "./Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen relative ">
        <img
          className="blur-s brightness-25 w-full h-full objectif-cover"
          src={wallpaper}
        />
        <div className="absolute top-0 w-full">
          <WelcomeElement />
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className="w-full">
          <Services />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Home;
