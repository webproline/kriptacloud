import { Check } from 'lucide-react';
import { PRICING_TIERS, type BillingCycle } from '../data/kriptaData';

interface PricingSectionProps {
  billing: BillingCycle;
  onBillingChange: (cycle: BillingCycle) => void;
}

function formatEuro(amount: number): string {
  return `€${amount.toFixed(2).replace('.', ',')}`;
}

export function PricingSection({ billing, onBillingChange }: PricingSectionProps) {
  return (
    <section id="planos" className="border-t border-slate-800/70 bg-[#050811] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-sky-400">Estrutura de Planos Prevista</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Capacidades adaptadas a cada necessidade.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Todos os níveis incluirão encriptação privada, acesso web em kriptacloud.com e aplicações para computador e telemóvel.
            </p>
          </div>

          {/* Segmented billing cycle control */}
          <div
            role="group"
            aria-label="Periodicidade de faturação"
            className="inline-flex max-w-full self-start rounded-lg border border-slate-800 bg-[#0A101F] p-1 md:self-auto shrink-0"
          >
            <button
              type="button"
              onClick={() => onBillingChange('monthly')}
              className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer sm:px-4 ${
                billing === 'monthly'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Faturação Mensal
            </button>
            <button
              type="button"
              onClick={() => onBillingChange('annual')}
              className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer sm:px-4 ${
                billing === 'annual'
                  ? 'bg-sky-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Anual · Poupa 20%
            </button>
          </div>
        </div>

        {/* 5-plan informative grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRICING_TIERS.map((tier) => {
            const activePrice =
              billing === 'monthly' ? tier.monthlyPrice : tier.annualMonthlyPrice;

            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-2xl border p-6 ${
                  tier.featured
                    ? 'border-sky-500/80 bg-[#0C1426]'
                    : 'border-slate-800/90 bg-[#0A101F]'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    {tier.featured && (
                      <span className="text-xs font-semibold text-sky-400">Mais popular</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{tier.subtitle}</p>

                  <div className="mt-5 border-t border-slate-800/80 pt-5">
                    <p className="font-[var(--font-display)] text-2xl font-bold text-white tabular-nums">
                      {tier.storage}
                    </p>
                    <div className="mt-1.5 flex items-baseline gap-1">
                      {activePrice === 0 ? (
                        <span className="text-sm font-medium text-slate-300">
                          Gratuito para sempre
                        </span>
                      ) : (
                        <>
                          <span className="font-[var(--font-mono)] text-xl font-medium text-sky-400 tabular-nums">
                            {formatEuro(activePrice)}
                          </span>
                          <span className="text-xs text-slate-400">/ mês</span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-slate-300">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 text-sky-400 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 border-t border-slate-800/70 pt-4 text-xs text-slate-400">
                  Disponível no lançamento
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
