import estrutura from "../assets/benefits/estrutura.jpg";
import ambiente from "../assets/benefits/espaco2.jpg";
import comunidade from "../assets/benefits/loc.jpg";
import treinadores from "../assets/benefits/trei2.jpg";

const items = [
  {
    image: estrutura,
    title: "Estrutura completa",
    text: "Equipamentos modernos para todos os níveis",
  },
  {
    image: ambiente,
    title: "Ambiente impecável",
    text: "Conforto e limpeza em cada treino",
  },
  {
  image: comunidade,
  title: "Localização privilegiada",
  text: "Fácil acesso, no coração da cidade",
},
  {
    image: treinadores,
    title: "Treinadores de elite",
    text: "Ajudam você a alcançar resultado real",
  },
];

export default function Beneficios() {
  return (
    <section id="estrutura" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl text-bone sm:text-5xl">
          Benefícios
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg leading-tight text-volt line-clamp-2 min-h-[1.5em] sm:min-h-[1.4em]">
                   {item.title}
                   </h3>
                    <p className="mt-1 text-sm text-bone-dim">{item.text}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}