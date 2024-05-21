import { useState } from 'react'
import OpenAI from 'openai';
import OpenaiNavbar from './OpenaiNavbar.jsx'
import OpenaiFooter from './OpenaiFooter.jsx'
import OpenaiCarousel from './components/OpenaiCarousel.jsx';
import axios from 'axios';

function OpenaiPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("I'll choose my own!");
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("src/openai-page/RICK_AND_MORTY_PLACEHOLDER.png");

  const openai = new OpenAI({
    //apiKey: `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`,
    baseURL: "https://api.proxyapi.ru/openai/v1/images/generations",
    apiKey: `sk-XRI0xeMVpt3b1r5Mbw17O3ZsglXu3BDS`,
    dangerouslyAllowBrowser: true
  });

  const generateImage = async () => {
    setLoading(true);

    try {      
      const response = await axios.post(
      'https://api.proxyapi.ru/openai/v1',
      {
        model: "dall-e-3",
        prompt: `${prompt}`,
      },
      {
        headers: {
          'Authorization': `Bearer sk-XRI0xeMVpt3b1r5Mbw17O3ZsglXu3BDS`,
          'Content-Type': 'application/json',
        }
      }
    );

      console.log(response.data.choices[0].text);

      //const response = await openai.images.generate({
      //  model: "dall-e-3",
      //  prompt: `${prompt}}`,
      //  n: 1,
      //  size: "1024x1024",
      //});

      console.log(response.data[0].url);
      setImageURL(response.data[0].url);
      setPrompt("");
      setLoading(false);
    }
    catch (error) {
      const errorMessage = error.response ? `${error.response.status}: ${error.response.data}` : error.message;
      console.log(errorMessage);
      setLoading(false);
      setImageURL("https://yt3.googleusercontent.com/8p3T2P_yfG9W-aDnkOdLZ7SIUgpLrBdptqV-oYsOgQfzhubrClJArUt0R8Yls0Fs_usckusS=s900-c-k-c0x00ffffff-no-rj")
    }
  }

  return (
    <div>
      <OpenaiNavbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div className="flex flex-col border-b border-neutral-800 items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Попробуйте создать по вашему запросу
            <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
              {" "}
              изображение
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Разбудите свое творчество и воплотите свои идеи в изображения с помощью нашего интуитивно понятного инструмента. Начните прямо сейчас и превратите свои фантазии в живопись!
          </p>
          <div className="flex mt-10 justify-center">
            <div className="form-control row-span-1 md:col-span-7">
            <div className="flex flex-col gap-4 my-6 items-start">
            <label className="w-full max-w-md">
              <span className="label-text text-sm md:text-lg">Введите запрос:</span>
              <input
                type="text"
                placeholder="Например: Прекрасный пейзаж с котом"
                className="py-4 px-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="flex flex-col gap-4 my-6 items-start"> {/* Добавлен отступ gap-4 и my-6 */}
            <label className="w-full max-w-md">
              <span className="label-text text-sm md:text-lg">Выберите стиль иллюстрации</span>
              <select
                className="py-4 px-5 w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                required
              >
                <option>I'll choose my own!</option>
                <option>3D render</option>
                <option>Ballpoint pen art</option>
                <option>Baroque</option>
                <option>Charcoal sketch</option>
                <option>Corporate Memphis</option>
                <option>Cubism</option>
                <option>Cyberpunk</option>
                <option>Low Poly</option>
                <option>Pixar</option>
                <option>Pixel art</option>
                <option>Watercolor</option>
                <option>Art Deco</option>
                <option>Impressionism</option>
                <option>Pop Art</option>
                <option>Surrealism</option>
                <option>Ukiyo-e</option>
              </select>
            </label>
          </div>
          <div className={`flex flex-col gap-4 my-6 items-start ${style === "I'll choose my own!" ? "" : "hidden"}`}> {/* Добавлен отступ gap-4 и my-6 */}
            <label className="w-full max-w-md">
              <span className="label-text text-sm md:text-lg">Введите стиль иллюстрации</span>
              <input
                type="text"
                placeholder="Anime, Medieval, Warhol, etc"
                className="py-4 px-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                onChange={(e) => setCustom(e.target.value)}
              />
            </label>
          </div>
            <div className="flex flex-col items-center my-4">
            <button
              onClick={generateImage}
              className="inline-flex justify-center items-center w-full max-w-md h-12 p-5 tracking-tight text-xl bg-purple-700 text-white hover:bg-purple-900 border border-purple-700 rounded-lg transition duration-700"
            >
              Сгенерировать
            </button>
            {loading ? (
              <div className="animate-spin inline-block mt-4 size-6 border-[5px] border-current border-t-transparent text-purple-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <span className="label-text text-xs alt-label mt-4"></span>
            )}
          </div>
            </div>
            <div className="md:col-span-5 mt-4 md:mt-0">
            <a href={imageURL} target="_blank">
            <img
              className="object-cover rounded-lg w-full md:w-2/3 lg:w-3/4 border border-purple-700 shadow-sm shadow-purple-400 mx-4 my-9 ml-4 float-right"
              src={imageURL}
              alt={prompt}
            />
            </a>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 md:grid-cols-15 md:grid-rows-1 place-items-center py-10 px-20">
          <OpenaiCarousel />
        </div>
      </div>
      <OpenaiFooter />
    </div>
  );
  
  
}

export default OpenaiPage