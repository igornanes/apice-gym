import { useState } from "react";

const planos = [
  {
    nome: "Basic",
    precoMensal: 129,
    precoAnual: 99,
    destaque: false,
    beneficios: [
      "Acesso à sala de musculação",
      "Zona de cardio",
      "Vestiário e chuveiros",
      "Equipamentos básicos",
    ],
  },
  {
    nome: "Standard",
    precoMensal: 179,
    precoAnual: 139,
    destaque: false,
    beneficios: [
      "Tudo do Basic",
      "Aulas em grupo",
      "Acesso 24/7",
      "1 convidado por semana",
    ],
  },
  {
    nome: "Premium",
    precoMensal: 269,
    precoAnual: 219,
    destaque: true,
    beneficios: [
      "Tudo do Standard",
      "Treino personalizado (1x/semana)",
      "Acesso ilimitado 24/7",
      "Convidado sempre que quiser",
      "Zona de recuperação / massagem",
    ],
  },
];

export default function Planos() {
  const [anual, setAnual] = useState(false);
  const [selecionado, setSelecionado] = useState("Premium");

  return (
    <section id="planos" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl text-bone sm:text-5xl">
          Planos
        </h2>

        <div className="mt-8 inline-flex rounded-full bg-ink-soft p-1">
          <button
            onClick={() => setAnual(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              !anual ? "bg-volt text-ink" : "text-bone-dim"
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setAnual(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              anual ? "bg-volt text-ink" : "text-bone-dim"
            }`}
          >
            Anual
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`rounded-2xl border p-8 ${
              selecionado === plano.nome
              ? "border-volt bg-ink-soft"
              : "border-bone/10 bg-ink-soft/50"
          }`}
            >
              <h3 className="font-display text-2xl text-bone">
                {plano.nome}
              </h3>
              <p className="mt-4">
                <span className="font-display text-4xl text-bone">
                  R${anual ? plano.precoAnual : plano.precoMensal}
                </span>
                <span className="text-sm text-bone-dim"> /mês</span>
              </p>

              <ul className="mt-6 space-y-3">
                {plano.beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-start gap-2 text-sm text-bone-dim">
                    <span className="mt-0.5 text-volt">✓</span>
                    {beneficio}
                  </li>
                ))}
              </ul>

              <button
                  onClick={() => setSelecionado(plano.nome)}
                  className={`mt-8 w-full rounded-full py-3 font-semibold transition-transform hover:scale-105 ${
                  selecionado === plano.nome
                  ? "bg-volt text-ink"
                  : "border border-bone/20 text-bone"
          }`}
>
  Escolher plano
</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}