// Массив возможных пожеланий
const wishes = [
  "Удачного дня!",
  "Будьте счастливы!",
  "Вы прекрасны!",
  "Смело идите к своим целям!",
  "Сегодня ваш день!",
];

// Возвращает случайное пожелание из массива:
// Math.random() даёт число от 0 до 1, умножаем на длину массива
// и округляем вниз, получая корректный индекс
const getRandomWish = () => {
  const index = Math.floor(Math.random() * wishes.length);
  return wishes[index];
};

// Бесконечный цикл: setInterval вызывает функцию каждые 3000 мс (3 секунды)
setInterval(() => {
  const now = new Date(); // текущие дата и время
  console.log(`Текущая дата и время: ${now.toLocaleString()}`);
  console.log(`Пожелание: ${getRandomWish()}`);
  console.log("-------------------------");
}, 3000);