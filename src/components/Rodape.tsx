export default function Rodape() {
  return (
    <footer className="border-t border-bone/10 bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-lg text-bone">
          ÁPICE GYM<span className="text-volt">.</span>
        </p>

        <nav className="flex gap-6 text-sm text-bone-dim">
          <a href="#planos" className="hover:text-bone">Planos</a>
          <a href="#estrutura" className="hover:text-bone">Estrutura</a>
          <a href="#treinadores" className="hover:text-bone">Treinadores</a>
        </nav>

        <div className="flex gap-4 text-sm text-bone-dim">
          <a href="#" className="hover:text-volt">Instagram</a>
          <a href="#" className="hover:text-volt">WhatsApp</a>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-bone-dim/60">
        © {new Date().getFullYear()} Ápice Gym. Todos os direitos reservados.
      </p>
    </footer>
  );
}