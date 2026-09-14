const servicos = [
  {
    titulo: "Consultoria",
    texto: "Diagnóstico completo dos seus objetivos e ponto de partida.",
  },
  {
    titulo: "Avaliação física",
    texto: "Medidas e indicadores reais para acompanhar sua evolução.",
  },
  {
    titulo: "Instrução técnica",
    texto: "Execução correta dos exercícios, sem risco de lesão.",
  },
  {
    titulo: "Programa sob medida",
    texto: "Um plano de treino feito pra você, não pra todo mundo.",
  },
];

export default function Servicos() {
  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl text-bone sm:text-5xl">
          Serviços
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, i) => (
            <div key={servico.titulo} className="border-t border-bone/10 pt-6">
              <span className="font-display text-sm text-volt">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-bone">
                {servico.titulo}
              </h3>
              <p className="mt-2 text-sm text-bone-dim">{servico.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}