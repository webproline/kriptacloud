import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/kriptaData';

export function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section
      id="perguntas"
      className="border-t border-slate-800/70 bg-[#080D1A] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: Context & Project Overview */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-sky-400">Perguntas Frequentes</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Esclarecimentos sobre privacidade e o projeto.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A Kripta Cloud está a ser construída com foco em encriptação ponta-a-ponta, desempenho europeu e simplicidade de utilização. As subscrições e criação de contas serão ativadas em etapas futuras do desenvolvimento em{' '}
              <span className="font-medium text-white">kriptacloud.com</span>.
            </p>
          </div>

          {/* Right: Accessible FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-800/80 border-y border-slate-800/80">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={item.question} className="py-4">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex min-h-[44px] w-full items-center justify-between gap-4 text-left text-sm font-semibold text-white transition-colors hover:text-sky-400 cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-sky-400' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2 pb-1 text-sm leading-relaxed text-slate-300">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
