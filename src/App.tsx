import { useState } from 'react';
import { ArrowRight, Check, Play } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { SecurityArchitecture } from './components/SecurityArchitecture';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqAndSignup';
import { FooterAndModals } from './components/FooterAndModals';
import { TRUST_PILLARS, type BillingCycle } from './data/kriptaData';

export default function App() {
  const [billing, setBilling] = useState<BillingCycle>('monthly');
  const [demoOpen, setDemoOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#050811] text-slate-100">
      <Navbar onExplorePlans={() => scrollToSection('planos')} />

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.14),transparent_55%)] pt-10 pb-14 sm:pt-20 sm:pb-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
              {/* Left Column: Value Proposition & Informative Navigation */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="text-sm font-medium text-sky-400">
                  Armazenamento Encriptado · kriptacloud.com
                </p>

                <h1 className="mt-3 text-[clamp(2.125rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white">
                  A tua Cloud privada. Em qualquer lugar.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Armazena, protege e partilha os teus ficheiros com encriptação ponta-a-ponta, em qualquer dispositivo e com total soberania de dados na Europa.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
                    <span>Ficheiros encriptados no teu aparelho antes do envio</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
                    <span>Sincronização automática em computador, telemóvel e tablet</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
                    <span>Partilha controlada com validade temporal e palavra-passe</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('funcionalidades')}
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-sky-400 active:bg-sky-600 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    <span>Explorar Funcionalidades</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setDemoOpen(true)}
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-slate-700/80 bg-[#0A101F] px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-slate-600 hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    <Play className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                    <span>Ver Como Funciona</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Kripta Cloud Brand & Architectural Focal Panel */}
              <div className="lg:col-span-5">
                <div className="relative flex h-full min-h-[240px] sm:min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-800/90 bg-[#070B16] p-6 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.16),transparent_68%)]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute h-64 w-64 rounded-full border border-sky-500/10"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute h-88 w-88 rounded-full border border-slate-800/70"
                  />

                  <img
                    src="/assets/aistudio/IMG_4944_c6afa697.jpg"
                    alt="KriptaCloud — Identidade oficial"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full max-w-[260px] sm:max-w-[340px] object-contain mix-blend-screen select-none"
                  />

                  <p className="relative z-10 mt-6 text-center text-xs font-medium text-slate-400">
                    Infraestrutura privada na nuvem · Encriptação ponta-a-ponta
                  </p>
                </div>
              </div>
            </div>

            {/* Full-width 5-pillar horizontal trust bar */}
            <div className="mt-14 grid grid-cols-1 divide-y divide-slate-800/80 rounded-2xl border border-slate-800/90 bg-[#0A101F] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
              {TRUST_PILLARS.map((pillar) => (
                <div key={pillar.title} className="p-5">
                  <p className="text-sm font-semibold text-white">{pillar.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CapabilitiesBento />

        <SecurityArchitecture />

        <PricingSection billing={billing} onBillingChange={setBilling} />

        <FaqSection />
      </main>

      <FooterAndModals
        demoOpen={demoOpen}
        onCloseDemo={() => setDemoOpen(false)}
        onExplorePlansFromDemo={() => scrollToSection('planos')}
      />
    </div>
  );
}
