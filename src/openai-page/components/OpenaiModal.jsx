import React from 'react'
import { IoWarning } from 'react-icons/io5'

// https://cors-anywhere.herokuapp.com/

export default function OpenaiModal({setPopUp}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-neutral-900 p-6 sm:p-10 rounded-lg shadow-md max-w-md w-full">
            <h1 className="font-bold text-center text-lg mb-5">Технология CORS мешает использовать нейросеть.</h1>
            <p>
            <b>CORS</b> — это функция HTTP, которая позволяет веб-приложению, работающему под одним доменом, получать доступ к ресурсам в другом домене. Чтобы снизить вероятность атак с использованием межузловых сценариев, все современные веб-браузеры реализуют ограничение безопасности, известное как политика одного источника.
            Дело в том, что CORS препятствует отправке запроса на сайт, который по итогу должен сгенерировать картинку и вернуть ответ в виде ссылки на эту картинку.
            Для того, чтобы избежать блокировки запросов, используется <b>Proxy (прокси)</b> сервер.
            Чтобы добавить свой IP в список разрешенных, вы должны зайти на этот сайт "https://cors-anywhere.herokuapp.com/corsdemo"
            и нажать на кнопку <b>"Request temporary access to the demo server"</b>.
            </p>
            <div className="flex justify-center mt-6">
              <button
                className="inline-flex justify-center items-center h-10 px-4 text-sm bg-transparent text-purple-700 hover:bg-purple-700 hover:text-white border border-purple-700 rounded-lg transition duration-300"
                onClick={() => setPopUp(false)}
              >
                Я разблокировал свой IP.
              </button>
            </div>
          </div>
        </div>
      );
}