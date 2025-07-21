// 🎨 Масив кольорів
const colors = [
  "#fce38a",
  "#95e1d3",
  "#f38181",
  "#eaffd0",
  "#a8edea",
  "#d6a4a4",
  "#c3cfe2",
];

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
