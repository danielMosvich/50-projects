import { useEffect, useRef } from "react";
import "./styles/scrollAnimation.css";
export const ScrollAnimation = () => {
  const cardsRefs = useRef<HTMLDivElement[] | null[]>([]);
  const cards = Array.from({ length: 100 }, (_, i) => String(i + 1));

  const handleClick = () => {
    const cards = document.querySelectorAll(".card-scroll");
    const triggerBottom = (window.innerHeight / 5) * 4;
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show-scroll");
      } else {
        card.classList.remove("show-scroll");
      }
    });
  };
  useEffect(() => {
    handleClick();
  });
  useEffect(() => {
    window.addEventListener("scroll", handleClick);
    return () => {
      window.removeEventListener("scroll", handleClick);
    };
  });
  return (
    <div className="bg-amber-200 w-full min-h-screen flex flex-col items-center pt-10 gap-10">
      <h2 className="text-4xl font-bold">Scroll to see the animation</h2>
      {cards.map((_item, index) => (
        <div
          ref={(_item) => (cardsRefs.current[index] = _item)}
          key={index}
          className="card-scroll"
        >
          Card number {index + 1}
        </div>
      ))}
    </div>
  );
};
