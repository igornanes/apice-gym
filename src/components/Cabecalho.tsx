import { useEffect, useState } from "react";

const links = [
  { label: "Planos", href: "#planos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Treinadores", href: "#treinadores" },
];

export default function Cabecalho() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/90 backdrop-blur">
      <div className="flex w-full items-center justify-between px-8 py-4">
        <a href="#topo" className="font-display text-xl tracking-tight text-bone">
          ÁPICE GYM<span className="text-volt">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-bone-dim transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#planos"
            className="rounded-full bg-volt px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Matricule-se
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`h-0.5 w-6 bg-bone transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bone transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-white/5 bg-ink px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-bone-dim"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#planos"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-volt px-5 py-2 text-center text-sm font-semibold text-ink"
          >
            Matricule-se
          </a>
        </nav>
      )}
    </header>
  );
}