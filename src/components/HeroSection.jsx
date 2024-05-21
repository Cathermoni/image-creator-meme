import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  let navigate = useNavigate();

  const navigateToOpenai = () => {
    navigate('/openai');
  };

  return (
    <div className="flex flex-col border-b border-neutral-800 items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Попробуйте создать по вашему запросу
        <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          изображение
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Разбудите свое творчество и воплотите свои идеи в изображения с помощью нашего интуитивно понятного инструмента. Начните прямо сейчас и превратите свои фантазии в  живопись!
      </p>
      <div className="flex mt-10 justify-center">
        <img
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-purple-400 mx-2 my-4"
          src={img1}
          alt=""
        />
        <img
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-purple-400 mx-2 my-4"
          src={img2}
          alt=""
        />
      </div>
      <div className="flex justify-center my-10">
      <button
        onClick={navigateToOpenai}
        className="inline-flex justify-center items-center text-center w-full h-12 p-8 mt-15 tracking-tight text-xl hover:bg-purple-900 border border-purple-900 rounded-lg transition duration-700"
      >
        Начать генерировать!
      </button>
      </div>
    </div>
  );
};

export default HeroSection;
