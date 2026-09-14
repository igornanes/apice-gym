import { useState } from "react";

const perguntas = [
  {
    pergunta: "Preciso de experiência prévia para treinar na Ápice?",
    resposta:
      "Não! Temos treinadores prontos para te acompanhar desde o primeiro treino, seja você iniciante ou avançado.",
  },
  {
    pergunta: "Posso cancelar meu plano quando quiser?",
    resposta:
      "Sim, os planos mensais podem ser cancelados a qualquer momento. Os planos anuais têm condições específicas — confira com nossa equipe.",
  },
  {
    pergunta: "A academia tem estacionamento?",
    resposta:
      "Sim, contamos com estacionamento próprio para alunos, sem custo adicional.",
  },
  {
    pergunta: "Como funciona o acesso 24/7 do plano Standard e Premium?",
    resposta:
      "Você recebe um cartão de acesso liberado para entrar na academia a qualquer hora, todos os dias da semana.",
  },
  {
    pergunta: "Posso levar um convidado para treinar comigo?",
    resposta:
      "Depende do seu plano: Standard permite 1 convidado por semana, e Premium permite convidados sempre que quiser.",
  },
];

export default function Duvida() {
  const [aberto, setAberto] = useState<number | null>(0);

  function alternar(i: number) {
    setAberto(aberto === i ? null : i);
  }

  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl text-bone sm:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="mt-10 divide-y divide-bone/10 border-t border-bone/10">
          {perguntas.map((item, i) => (
            <div key={item.pergunta}>
              <button
                onClick={() => alternar(i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-display text-base text-bone sm:text-lg">
                  {item.pergunta}
                </span>
                <span
                  className={`ml-4 shrink-0 text-2xl text-volt transition-transform ${
                    aberto === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {aberto === i && (
                <p className="pb-5 text-sm leading-relaxed text-bone-dim sm:text-base">
                  {item.resposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}