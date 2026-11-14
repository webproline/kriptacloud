import { useState } from 'react';
import { ARCHITECTURE_TABS, type ArchitectureTab } from '../data/kriptaData';

const PROOF_METRICS = [
  {
    value: 'Só tu acedes',
    label: 'Chave privada exclusiva',
    detail: 'Os ficheiros são protegidos no teu aparelho antes do envio',
  },
  {
    value: 'União Europeia',
    label: 'Dados guardados na Europa',
    detail: 'Armazenamento europeu em conformidade com as leis RGPD',
  },
  {
    value: 'Várias cópias',
    label: 'Segurança contra perdas',
    detail: 'Os ficheiros ficam replicados automaticamente para maior fiabilidade',
  },
  {
    value: 'Até 90 dias',
    label: 'Recuperação de versões',
    detail: 'Podes voltar atrás caso apagues ou alteres algo por engano',
  },
];

export function SecurityArchitecture() {
  const [activeTabId, setActiveTabId] = useState<ArchitectureTab['id']>('privacy');
  const activeTab =
    ARCHITECTURE_TABS.find((tab) => tab.id === activeTabId) ?? ARCHITECTURE_TABS[0];

  return (
    <section id="seguranca" className="border-t border-slate-800/70 bg-[#080D1A] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Clear Consumer Trust Strip */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-800/80 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1.5">
              <p className="font-[var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-sky-400">{metric.label}</p>
              <p className="text-xs leading-relaxed text-slate-400">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Interactive Plain-Language Security Overview */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-sky-400">Segurança Sem Complicações</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Como protegemos o que é importante para ti.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Escolhe um dos temas abaixo para perceberes, em linguagem simples, como a Kripta Cloud protege os teus ficheiros.
            </p>

            <div
              role="tablist"
              aria-label="Garantias de segurança da Kripta Cloud"
              className="mt-6 flex flex-wrap gap-2"
            >
              {ARCHITECTURE_TABS.map((tab) => {
                const isSelected = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500 text-slate-950 font-semibold'
                        : 'border border-slate-800 bg-[#0D1424] text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            className="rounded-2xl border border-slate-800/90 bg-[#050811] p-6 sm:p-8 lg:col-span-7"
          >
            <h3 className="text-xl font-semibold text-white">{activeTab.headline}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{activeTab.summary}</p>

            <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-2">
              {activeTab.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1">
                  <dt className="text-xs text-slate-400">{spec.label}</dt>
                  <dd className="text-sm font-semibold text-white">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
