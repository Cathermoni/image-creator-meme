import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const features = [
  {
    icon: < BotMessageSquare/ >, // Replace with an icon representing text input (maybe a keyboard?)
    text: "Генерация по текстовому описанию",
    description:
      "Создавайте изображения на основе ваших идей с помощью подробного текстового описания.",
  },
  {
    icon: < Fingerprint/ >, // Replace with an icon representing style (maybe a brush?)
    text: "Выбор стиля изображения",
    description:
      "Выберите желаемый художественный стиль для вашего изображения, от реалистичного до мультяшного.",
  },
  {
    icon: < ShieldHalf/ >, // Replace with an icon representing parameters (sliders?)
    text: "Настройка параметров изображения",
    description:
      "Отрегулируйте размер, цветовую палитру и другие параметры, чтобы получить идеальное изображение.",
  },
  {
    icon: < BatteryCharging/ >, // Replace with an icon representing preview (an eye?)
    text: "Предварительный просмотр в реальном времени",
    description:
      "Просматривайте свое изображение по мере внесения изменений, чтобы добиться наилучшего результата.",
  },
  {
    icon: < PlugZap/ >, // Replace with an icon representing saving (a floppy disk?)
    text: "Сохранение и загрузка изображений",
    description:
      "Сохраняйте свои сгенерированные изображения и загружайте их обратно для дальнейшего редактирования.",
  },
];


export const checklistItems = [
  {
    title: "Загрузите свое текстовое описание",
    description:
      "Опишите изображение, которое вы хотите создать, с помощью подробного текстового описания.",
  },
  {
    title: "Выберите художественный стиль",
    description:
      "Определите желаемый стиль для вашего изображения, например, реалистичный, мультяшный или абстрактный.",
  },
  {
    title: "Сгенерируйте изображение",
    description:
      "Нажмите кнопку генерации, чтобы преобразовать ваше описание в уникальное изображение.",
  },
  {
    title: "Сохраните или поделитесь своим изображением",
    description:
      "Загрузите свое сгенерированное изображение или поделитесь им напрямую в социальных сетях.",
  },
];


export const pricingOptions = [
  {
    title: "Бесплатный",
    price: "Бесплатно", // Free in Russian
    features: [
      "Несколько изображений в месяц", // A few images per month
      "Стандартное разрешение", // Standard resolution
      "Водяной знак", // Watermark
    ],
  },
  {
    title: "Базовый",
    price: "$10",
    features: [
      "Неограниченное количество изображений", // Unlimited images
      "Высокое разрешение", // High resolution
      "Отсутствие водяного знака", // No watermark
      "Дополнительные художественные стили", // Additional artistic styles
    ],
  },
  {
    title: "Профессиональный",
    price: "$25",
    features: [
      "Неограниченное количество изображений", // Unlimited images
      "Максимальное разрешение", // Maximum resolution
      "Отсутствие водяного знака", // No watermark
      "Все художественные стили", // All artistic styles
      "Пакетное редактирование изображений", // Batch image editing
      "Расширенные параметры", // Advanced settings
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
