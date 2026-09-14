import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl text-bone sm:text-5xl">
            Entre em contato
          </h2>
          <p className="mt-4 max-w-md text-bone-dim">
            Preencha o formulário e nossa equipe entra em contato para tirar
            dúvidas ou agendar sua visita.
          </p>

          <div className="mt-8 space-y-2 text-sm text-bone-dim">
            <p>📍 Rua Marechal, 123 — Jardins</p>
            <p>📞 (79) 99999-9999</p>
            <p>✉️ contato@apicegym.com.br</p>
          </div>
        </div>

        <div>
          {enviado ? (
            <div className="rounded-2xl border border-volt/40 bg-ink-soft p-8 text-center">
              <p className="font-display text-xl text-volt">
                Mensagem enviada!
              </p>
              <p className="mt-2 text-sm text-bone-dim">
                Em breve alguém da nossa equipe vai te responder.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                required
                className="w-full rounded-xl border border-bone/15 bg-ink-soft px-4 py-3 text-bone placeholder:text-bone-dim/60 focus:border-volt focus:outline-none"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="w-full rounded-xl border border-bone/15 bg-ink-soft px-4 py-3 text-bone placeholder:text-bone-dim/60 focus:border-volt focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Seu telefone"
                className="w-full rounded-xl border border-bone/15 bg-ink-soft px-4 py-3 text-bone placeholder:text-bone-dim/60 focus:border-volt focus:outline-none"
              />
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full resize-none rounded-xl border border-bone/15 bg-ink-soft px-4 py-3 text-bone placeholder:text-bone-dim/60 focus:border-volt focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-volt py-3.5 font-semibold text-ink transition-transform hover:scale-105"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}