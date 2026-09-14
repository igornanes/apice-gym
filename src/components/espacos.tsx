import { useState } from "react";
import espaco1 from "../assets/gym-space/espaco1.jpg";
import espaco2 from "../assets/gym-space/espaco2.jpg";
import espaco3 from "../assets/gym-space/espaco3.jpg";

const slides = [
  {
    image: espaco1,
    title: "Espaço do clube",
    text: "Ambiente amplo pensado para sua evolução.",
  },
  {
    image: espaco2,
    title: "Espaço do clube",
    text: "Zonas de cardio e musculação bem distribuídas.",
  },
  {
    image: espaco3,
    title: "Espaço do clube",
    text: "Estrutura pronta para todos os níveis de treino.",
  },
];

export default function Espacos() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

  const slide = slides[index];

  return (
    <section className="bg-ink px-6 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
        <img
          src={slide.image}
          alt={slide.title}
          className="h-[420px] w-full object-cover sm:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

        <button
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-volt text-ink transition-transform hover:scale-110"
        >
        </button>
        <button
          onClick={next}
          aria-label="Próxima foto"
          className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-volt text-ink transition-transform hover:scale-110"
        >
          
        </button>

        <div className="absolute bottom-0 left-0 p-8">
          <h3 className="font-display text-2xl text-bone sm:text-3xl">
            {slide.title}
          </h3>
          <p className="mt-2 max-w-md text-bone-dim">{slide.text}</p>
        </div>

        <div className="absolute bottom-6 right-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-volt" : "bg-bone/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}