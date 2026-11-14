import { useState } from 'react';
import { X, Shield, Lock, Server } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

type LegalDoc = 'privacy' | 'terms' | 'gdpr' | null;

interface FooterAndModalsProps {
  demoOpen: boolean;
  onCloseDemo: () => void;
  onExplorePlansFromDemo: () => void;
}

export function FooterAndModals({
  demoOpen,
  onCloseDemo,
  onExplorePlansFromDemo,
}: FooterAndModalsProps) {
  const [legalDoc, setLegalDoc] = useState<LegalDoc>(null);

  const legalContent: Record<Exclude<LegalDoc, null>, { title: string; body: string[] }> = {
    privacy: {
      title: 'Política de Privacidade',
      body: [
        'A Kripta Cloud (kriptacloud.com) opera sob o princípio de minimização de dados. Não vendemos, não alugamos e não analisamos o conteúdo dos ficheiros guardados na plataforma.',
        'Esta página inicial é exclusivamente informativa: não recolhe dados pessoais, não efetua registos de utilizadores e não utiliza cookies de seguimento publicitário.',
      ],
    },
    terms: {
      title: 'Termos de Serviço',
      body: [
        'Cada conta na Kripta Cloud será pessoal e intransmissível, sendo o utilizador o único detentor da palavra-passe mestre e das chaves de recuperação associadas ao seu cofre.',
        'Os detalhes definitivos de contratação e SLA serão publicados aquando da abertura comercial da plataforma em kriptacloud.com.',
      ],
    },
    gdpr: {
      title: 'Conformidade RGPD e Proteção Europeia',
      body: [
        'Os ficheiros da Kripta Cloud são armazenados em servidores localizados na União Europeia, assegurando rapidez de acesso e cumprimento integral das leis europeias de proteção de dados.',
        'Garantimos os direitos de acesso, retificação, portabilidade e eliminação definitiva dos dados pessoais previstos no Regulamento (UE) 2016/679.',
      ],
    },
  };

  return (
    <>
      <footer className="border-t border-slate-800/80 bg-[#04060D] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <a
                href="#inicio"
                aria-label="Voltar ao início"
                className="inline-flex items-center"
              >
                <BrandLogo size="sm" />
              </a>
              <p className="mt-2 text-xs text-slate-400">
                Armazenamento na nuvem com encriptação ponta-a-ponta · kriptacloud.com
              </p>
            </div>

            <nav
              aria-label="Ligações do rodapé"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400"
            >
              <a href="#funcionalidades" className="hover:text-white transition-colors">
                Funcionalidades
              </a>
              <a href="#seguranca" className="hover:text-white transition-colors">
                Segurança
              </a>
              <a href="#planos" className="hover:text-white transition-colors">
                Planos
              </a>
              <button
                type="button"
                onClick={() => setLegalDoc('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacidade
              </button>
              <button
                type="button"
                onClick={() => setLegalDoc('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Termos
              </button>
              <button
                type="button"
                onClick={() => setLegalDoc('gdpr')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                RGPD
              </button>
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-800/70 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Kripta Cloud (kriptacloud.com). Todos os direitos reservados.</p>
            <p>Alojamento na União Europeia · Página de apresentação</p>
          </div>
        </div>
      </footer>

      {/* Walkthrough Demo Modal */}
      {demoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={onCloseDemo}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-[#0A101F] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs font-medium text-sky-400">Como funciona na prática</p>
                <h3 id="demo-modal-title" className="mt-1 text-xl font-bold text-white">
                  Três passos simples para proteger os teus ficheiros
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseDemo}
                aria-label="Fechar janela de demonstração"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800/80 bg-[#050811] p-4">
                <Lock className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-white">1. Protegido no teu aparelho</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Antes de enviar, o teu ficheiro é fechado com uma chave privada que só tu conheces.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-[#050811] p-4">
                <Server className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-white">2. Guardado na Europa</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  O ficheiro viaja por uma ligação segura até aos nossos servidores na União Europeia.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-[#050811] p-4">
                <Shield className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-white">3. Sempre disponível</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Acede às tuas pastas no computador, telemóvel ou em kriptacloud.com quando precisares.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-800 pt-5">
              <button
                type="button"
                onClick={onCloseDemo}
                className="min-h-[40px] rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => {
                  onCloseDemo();
                  onExplorePlansFromDemo();
                }}
                className="min-h-[40px] rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 cursor-pointer"
              >
                Ver Planos Previstos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legal Information Modal */}
      {legalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setLegalDoc(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-800 bg-[#0A101F] p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <h3 id="legal-modal-title" className="text-lg font-bold text-white">
                {legalContent[legalDoc].title}
              </h3>
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                aria-label="Fechar documento"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {legalContent[legalDoc].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                className="min-h-[40px] rounded-lg bg-slate-800 px-4 py-2 text-xs font-medium text-white hover:bg-slate-700 cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
