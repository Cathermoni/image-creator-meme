import { useState } from 'react'
import OpenaiNavbar from './OpenaiNavbar.jsx'
import OpenaiFooter from './OpenaiFooter.jsx'
import OpenaiCarousel from './components/OpenaiCarousel.jsx';
import OpenaiModal from './components/OpenaiModal.jsx';
import axios from 'axios';
import RickAndMortyPic from './RICK_AND_MORTY_PLACEHOLDER.png';

function OpenaiPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Я выберу свой стиль сам(а)!");
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(RickAndMortyPic);
  const [popUp, setPopUp] = useState(false);

  const generateRandomQuery = () => {
    const phrases = [
      ["красивый", "загадочный", "волшебный", "величественный", "очаровательный", "вдохновляющий", "изумительный"],
      ["пейзаж", "портрет", "натюрморт", "абстракция", "макрофотография", "городской пейзаж", "пейзаж с морем", "лесной пейзаж"],
      ["утро", "закат", "ночь", "рассвет", "полдень", "вечер", "лунная ночь", "звездное небо"]
    ];

    const styles = [
      "аниме",
      "манга",
      "фантазия",
      "киберпанк",
      "минимализм",
      "неон",
      "ретро",
      "футуризм",
    ];

    const firstWord = phrases[0][Math.floor(Math.random() * phrases[0].length)];
    const secondWord = phrases[1][Math.floor(Math.random() * phrases[1].length)];
    const thirdWord = phrases[2][Math.floor(Math.random() * phrases[2].length)];
    const fourthWord = styles[Math.floor(Math.random() * styles.length)];

    return `${firstWord} ${secondWord} ${thirdWord}. Style: ${fourthWord}`;
  }

  const generateImage = async (buttonType) => {
    setLoading(true);

    try {
      let finalStyle = "";
      let promptValue = "";
    
      if (buttonType === "surprise") {
        promptValue = generateRandomQuery();
        console.log("buttonType: " + buttonType)
      } else if (buttonType === "generate") {
        promptValue = prompt;
        finalStyle = `${style === "Я выберу свой стиль сам(а)!" ? custom.toLowerCase() : style.toLowerCase()}`;
        console.log("buttonType: " + buttonType)
        console.log("promptValue: " + promptValue)
        console.log("finalStyle: " + finalStyle)
      }
      else {
        finalStyle = `${style === "Я выберу свой стиль сам(а)!" ? custom.toLowerCase() : style.toLowerCase()}`;
        console.log("Error!: " + buttonType)
      }

      console.log("style: " + style)
      console.log("custom: " + custom)
      console.log("finalStyle: " + finalStyle)
    
      const requestBody = {
        model: "dall-e-3",
        prompt: `${promptValue} ${finalStyle}`,
      };
    
      console.log(requestBody);
    
      const response = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://api.proxyapi.ru/openai/v1/images/generations',
        requestBody,
        {
          headers: {
            'Authorization': `Bearer sk-XRI0xeMVpt3b1r5Mbw17O3ZsglXu3BDS`,
            'Content-Type': 'application/json',
          }
        }
      );
    
      console.log(response.data.data[0].url);
      setImageURL(response.data.data[0].url);
      setPrompt("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setImageURL("https://yt3.googleusercontent.com/8p3T2P_yfG9W-aDnkOdLZ7SIUgpLrBdptqV-oYsOgQfzhubrClJArUt0R8Yls0Fs_usckusS=s900-c-k-c0x00ffffff-no-rj");
    
      if (error.response) {
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
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
                onChange={(e) => {
                  setStyle(e.target.value); // Обновляем значение переменной style при изменении выбора в списке
                }}
                required
              >
              <option>Я выберу свой стиль сам(а)!</option>
              <option>Аниме</option>
              <option>3D-моделирование</option>
              <option>Графика шариковой ручкой</option>
              <option>Киберпанк</option>
              <option>Пиксар</option>
              <option>Пиксельное искусство</option>
              <option>Акварель</option>
              </select>
            </label>
          </div>
          <div className={`flex flex-col gap-4 my-6 items-start ${style === "Я выберу свой стиль сам(а)!" ? "" : "hidden"}`}> {/* Добавлен отступ gap-4 и my-6 */}
            <label className="w-full max-w-md">
              <span className="label-text text-sm md:text-lg">Введите стиль иллюстрации</span>
              <input
                type="text"
                placeholder="Манга, мультик, и т.д."
                className="py-4 px-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                onChange={(e) => setCustom(e.target.value)}
              />
            </label>
          </div>
            <div className="flex flex-col items-center my-4">
            <button
              onClick={() => generateImage("generate")}
              className="inline-flex justify-center items-center w-full max-w-md h-12 p-4 mb-4 tracking-tight text-xl bg-purple-700 text-white hover:bg-purple-900 border border-purple-700 rounded-lg transition duration-700"
            >
              Сгенерировать
            </button>
            <button
              onClick={() => generateImage("surprise")}
              className="inline-flex justify-center items-center w-full max-w-md h-12 p-4 mb-4 tracking-tight text-xl bg-blue-700 text-white hover:bg-blue-900 border border-blue-700 rounded-lg transition duration-700"
            >
              Удивите меня!
            </button>
            <button
              onClick={() => setPopUp(true)}
              className="inline-flex justify-center items-center w-full max-w-md h-12 p-4 tracking-tight text-xl bg-red-700 text-white hover:bg-red-900 border border-red-700 rounded-lg transition duration-700"
            >
              Предупреждение
            </button>
            {popUp && <OpenaiModal setPopUp={setPopUp} />}
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