export const content = {
  name: "Nathalya",
  title: "Model & Creator",
  tagline: "your army girl next door 🤭 send me a message 👀",
  ctas: [
    { label: "Onlyfans", href: "https://onlyfans.com/dutcharmygirl/c1", brand: "onlyfans" },
    { label: "F2F", href: "https://f2f.com/s/lJ7YwM", brand: "f2f" },
  ],
  gallery: Array.from({ length: 19 }).map((_, i) =>
    `/gallery/${String(i + 1).padStart(3, "0")}.jpg`
  ),
};
