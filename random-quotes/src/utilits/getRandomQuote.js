
export const fetchQuote = async () => {
  const res = await fetch("https://api.quotable.io/random");
  if (!res.ok) {
    throw new Error("Помилка при завантаженні цитати 😢");
  }

  const data = await res.json();
  return {
    text: data.content,
    author: data.author || "Невідомий",
  };
};
