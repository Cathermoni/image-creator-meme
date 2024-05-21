export default function OpenaiCarousel() {
  const images = [
    { src: 'src/openai-page/assets/4.jpg', alt: 'Image 1', description: 'Изображение превращает причудливого и детализированного искателя приключений в мага-паука в стиле, напоминающем размытую фотографию с камеры слежения низкого качества, сделанную в темной ночной обстановке при тусклом инфракрасном освещении.' },
    { src: 'src/openai-page/assets/5.jpg', alt: 'Image 2', description: 'Переосмыслите сцену в более темных тонах, изобразив фигуру в полном черном доспехе, сидящую посреди макового поля в сумерках.' },
    { src: 'src/openai-page/assets/6.jpg', alt: 'Image 3', description: 'Стилизованный антропоморфный кролик с большими глазами и ярко выраженным выражением гнева, изображенный в современной городской ночной обстановке с использованием пиксельной графики.' },
    { src: 'src/openai-page/assets/7.jpg', alt: 'Image 4', description: 'Черно-белое панно в стиле манга, на котором изображен молодой женский персонаж, выражающий усталость словами "...Чувак, я устала".' },
    { src: 'src/openai-page/assets/8.jpg', alt: 'Image 5', description: 'Фотография голубя в желтых резиновых сапогах, сделанная размытой камерой слежения низкого качества в темное время суток.' },
    { src: 'src/openai-page/assets/9.jpg', alt: 'Image 6', description: 'Керамическая статуэтка маленькой кошки, покрытая глянцевой бледно-голубой глазурью, с непропорционально большой сигаретой во рту.' },
    { src: 'src/openai-page/assets/10.jpg', alt: 'Image 7', description: 'Высококонтрастный черно-белый графический мем, напоминающий персонажей, похожих на Тохо, изображающий мужчину с серьезным выражением лица, курящего сигарету, одетого в рабочую униформу.' },
    { src: 'src/openai-page/assets/11.jpg', alt: 'Image 8', description: 'Фотография квадратного формата в сюрреалистическом стиле, на которой изображена голова маленького котенка, выглядывающая из большого средневекового латного шлема, стала более динамичной.' },
    { src: 'src/openai-page/assets/12.jpg', alt: 'Image 9', description: 'Фотография с жутковатой атмосферой, сделанная в сумерках или ночью с монохроматическим синим фильтром, подчеркивающим заснеженную обстановку.' },
    { src: 'src/openai-page/assets/13.jpg', alt: 'Image 10', description: 'Креативная и художественная фотография в винтажном стиле, на которой изображен человек, скрытый виниловой пластинкой, заменяющей голову.' },
    { src: 'src/openai-page/assets/14.jpg', alt: 'Image 11', description: 'Очень простое 8-битное пиксельное графическое изображение руки в темно-красных тонах, сжимающей красный череп на плоском зеленом фоне.' },
    { src: 'src/openai-page/assets/15.jpg', alt: 'Image 12', description: 'Фотография черного мусорного пакета, выполненного в еще более простой и абстрактной форме человеческого сердца.' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-xl sm:text-3xl lg:text-4xl text-center mb-8">
        Обзор
        <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          идей
        </span>
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group w-full md:w-1/4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg shadow-lg transition duration-500 ease-in-out transform group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-black bg-opacity-75 rounded-lg">
              <span className="text-white text-center">{image.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
