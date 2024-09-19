const today = new Date();
const nextYear = today.getFullYear() + 1;
const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
const differenceInTime = newYear - today;
const daysUntilNewYear = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

console.log(`До Нового Года осталось ${daysUntilNewYear} дня!`);