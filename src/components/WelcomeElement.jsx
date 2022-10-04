import ProfilImg from "../assets/profilImg.jpg";
import { motion } from "framer-motion";

const WelcomeElement = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row h-screen justify-center items-center space-x-4"
    >
      <img className="w-48 h-48 rounded-full " src={ProfilImg} />
      <div className="flex flex-col h-64 md:h-screen justify-center items-center sm:text-5xl text-4xl ">
        <h1 className="p-2 text-white">Hi!</h1>
        <h1 className="p-2 font-bold text-blue-600">I'm GROS Christian</h1>
        <h1 className="p-2 text-white">FullStack Developer</h1>
      </div>
    </motion.div>
  );
};

export default WelcomeElement;
