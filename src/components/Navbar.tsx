import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onExplorePlans: () => void;
}

const NAV_LINKS = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#seguranca', label: 'Segurança' },
  { href: '#planos', label: 'Planos' },
  { href: '#perguntas', label: 'Perguntas' },
];

export function Navbar({ onExplorePlans }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-[#050811]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand mark */}
        <a
          href="#inicio"
          aria-label="Kripta Cloud — Página inicial"
          className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 whitespace-nowrap shrink-0"
        >
          <BrandLogo size="sm" />
        </a>

        {/* Zone 2: 4 concise single-line links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-slate-300 transition-colors duration-150 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-sky-400 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA + mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onExplorePlans}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-sky-400 active:bg-sky-600 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Ver Planos
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 text-slate-200 transition-colors hover:border-slate-700 hover:text-white md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-[#070B16] px-4 py-4 md:hidden">
          <nav aria-label="Menu móvel" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onExplorePlans();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400 cursor-pointer"
            >
              Ver Planos
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
