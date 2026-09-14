import { useState } from "react";

const depoimentos = [
  {
    nome: "Juliana Ferreira",
    texto:
      "Em 4 meses na Ápice mudei completamente minha relação com treino. Estrutura impecável e os treinadores realmente acompanham de perto.",
  },
  {
    nome: "Marcos Vinícius",
    texto:
      "Já treinei em várias academias, mas nenhuma tinha esse nível de organização e atenção individual. Vale cada centavo.",
  },
  {
    nome: "Beatriz Lima",
    texto:
      "O acesso 24h mudou minha rotina. Consigo treinar no horário que funciona pra mim, sem abrir mão da qualidade.",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  function anterior() {
    setIndex((i) => (i === 0 ? depoimentos.length - 1 : i - 1));
  }

  function proximo() {
    setIndex((i) => (i === depoimentos.length - 1 ? 0 : i + 1));
  }

  const depoimento = depoimentos[index];

  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-bone sm:text-5xl">
          Depoimentos
        </h2>

        <div className="mt-12">
          <p className="text-xl leading-relaxed text-bone sm:text-2xl">
            "{depoimento.texto}"
          </p>
          <p className="mt-6 font-display text-lg text-volt">
            {depoimento.nome}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={anterior}
            aria-label="Depoimento anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-volt hover:text-volt"
          >
        
          </button>

          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-volt" : "bg-bone/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={proximo}
            aria-label="Próximo depoimento"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-volt hover:text-volt"
          >
            
          </button>
        </div>
      </div>
    </section>
  );
}