import { useEffect, useState } from "react";
import espaco1 from "../assets/gym-space/espaco1.jpg";
import espaco2 from "../assets/gym-space/espaco2.jpg";
import espaco3 from "../assets/gym-space/espaco3.jpg";

const imagens = [espaco1, espaco2, espaco3];

export default function Capa() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {imagens.map((img, i) => (
        <img
          key={img}
          src={img}
          alt="Interior da Ápice Gym"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-volt">
          + de 500 alunos transformados
        </p>
        <h1 className="font-display max-w-3xl text-5xl leading-[1.05] text-bone sm:text-6xl md:text-7xl">
          NO SEU ÁPICE,
          <br />
          VOCÊ NÃO PARA.
        </h1>
        <p className="mt-6 max-w-lg text-lg font-medium text-bone-dim">
          Treino sério para quem não aceita menos que o seu melhor. Estrutura
          completa, acompanhamento de verdade e uma comunidade que te
          empurra pra frente.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#planos" className="rounded-full bg-volt px-8 py-3.5 font-semibold text-ink transition-transform hover:scale-105">
            Comece agora
          </a>
          <a href="#estrutura" className="rounded-full border border-bone/20 px-8 py-3.5 font-semibold text-bone transition-colors hover:border-bone/50">
            Conheça o espaço
          </a>
        </div>
      </div>
    </section>
  );
}