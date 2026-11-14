import { useEffect, useState } from 'react';
import { Copy, Check, RefreshCw, Share2, FolderSync, History, KeyRound } from 'lucide-react';

async function computeFingerprint(input: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoded = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  return '8f4b2c19d7e03a51b8c6429e01f23c84a91d72f56b48e1c3092a6d4f7b18e30c';
}

export function CapabilitiesBento() {
  const [sampleInput, setSampleInput] = useState('Fotos_Ferias_2026.zip');
  const [digestHex, setDigestHex] = useState(
    '8f4b2c19d7e03a51b8c6429e01f23c84a91d72f56b48e1c3092a6d4f7b18e30c'
  );

  const [expiry, setExpiry] = useState<'24h' | '7d' | 'once'>('24h');
  const [requirePassword, setRequirePassword] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    let active = true;
    const value = sampleInput.trim() || 'kriptacloud-ficheiro';
    computeFingerprint(value).then((hex) => {
      if (active) setDigestHex(hex);
    });
    return () => {
      active = false;
    };
  }, [sampleInput]);

  const shareUrl = `https://kriptacloud.com/s/${expiry === '24h' ? 'k9p2m' : expiry === '7d' ? 'x4v8q' : 'u1n7z'}${
    requirePassword ? '?protegido=sim' : ''
  }`;

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1800);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1800);
    }
  };

  return (
    <section id="funcionalidades" className="border-t border-slate-800/70 bg-[#050811] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-sky-400">O Que Oferecemos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Concebida para quem quer simplicidade sem perder a privacidade.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Tudo acontece de forma automática em segundo plano: os teus ficheiros são protegidos no teu aparelho antes de seguirem para a nuvem.
          </p>
        </div>

        {/* Asymmetric Bento Grid: col-span-2 + col-span-1 */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 01. Marquee capability (col-span-2) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0A101F] p-6 sm:p-8 lg:col-span-2">
            <div>
              <div className="flex items-center gap-3 text-slate-400">
                <KeyRound className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-400">Proteção na origem</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                01. Ficheiros Protegidos Antes do Envio
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Antes de subir para <span className="font-medium text-white">kriptacloud.com</span>, cada ficheiro é fechado com uma chave privada no teu próprio dispositivo. Podes escrever um nome abaixo para ver como ele se transforma num código irreconhecível.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-800/80 pt-5">
              <label htmlFor="cipher-demo-input" className="block text-xs font-medium text-slate-400">
                Experimenta escrever o nome de um ficheiro
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  id="cipher-demo-input"
                  type="text"
                  value={sampleInput}
                  onChange={(e) => setSampleInput(e.target.value)}
                  placeholder="Ex.: Contrato_Casa.pdf"
                  className="min-h-[42px] w-full rounded-lg border border-slate-700/80 bg-[#050811] px-3.5 py-2 text-sm text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none sm:max-w-xs"
                />
                <div className="min-w-0 flex-1 overflow-hidden rounded-lg bg-[#050811] px-3.5 py-2.5">
                  <p className="truncate font-[var(--font-mono)] text-xs text-sky-400 tabular-nums">
                    {digestHex}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02. Multi-device Sync (col-span-1) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0A101F] p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-3 text-slate-400">
                <FolderSync className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-400">Em qualquer ecrã</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                02. Sincronização Automática
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Guarda um documento no portátil e abre-o segundos depois no telemóvel. Só enviamos o que mudou, para não gastar dados nem bateria desnecessários.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
              <div className="flex items-center justify-between py-1">
                <span>Computadores</span>
                <span className="font-medium text-slate-200">Windows · macOS · Linux</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Telemóveis e Tablets</span>
                <span className="font-medium text-slate-200">iOS · Android</span>
              </div>
            </div>
          </div>

          {/* 03. Controlled Sharing (col-span-1) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0A101F] p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-3 text-slate-400">
                <Share2 className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-400">Partilha simples</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                03. Links com Prazo de Validade
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Partilha pastas ou ficheiros com clientes e amigos escolhendo durante quanto tempo o link fica ativo e se pede palavra-passe.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-800/80 pt-4">
              <div className="grid grid-cols-3 gap-1 rounded-lg bg-[#050811] p-1">
                {[
                  { id: '24h', label: '24 horas' },
                  { id: '7d', label: '7 dias' },
                  { id: 'once', label: '1 descarga' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setExpiry(opt.id as '24h' | '7d' | 'once')}
                    className={`min-h-[36px] rounded-md px-2 py-1 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      expiry === opt.id
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <label className="mt-3 flex items-center justify-between text-xs text-slate-300 cursor-pointer">
                <span>Exigir palavra-passe</span>
                <input
                  type="checkbox"
                  checked={requirePassword}
                  onChange={(e) => setRequirePassword(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-700 bg-[#050811] accent-sky-500 cursor-pointer"
                />
              </label>

              <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-[#050811] px-3 py-2">
                <span className="truncate font-[var(--font-mono)] text-xs text-slate-300">
                  {shareUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  aria-label="Copiar link de exemplo"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-slate-800 hover:text-white shrink-0 cursor-pointer"
                >
                  {copiedLink ? (
                    <Check className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 04. Backups & Versioning (col-span-2) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0A101F] p-6 sm:p-8 lg:col-span-2">
            <div>
              <div className="flex items-center gap-3 text-slate-400">
                <History className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-400">Histórico de ficheiros</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                04. Cópias Automáticas e Recuperação de Versões
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Apagaste um documento sem querer ou guardaste uma alteração errada? A Kripta Cloud guarda versões anteriores para que possas recuperar o ficheiro original com facilidade.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-800/80 pt-5 sm:grid-cols-3">
              <div>
                <p className="font-[var(--font-mono)] text-lg font-medium text-white tabular-nums">
                  Até 90 dias
                </p>
                <p className="mt-0.5 text-xs text-slate-400">Tempo para recuperar versões antigas</p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-lg font-medium text-white tabular-nums">
                  Várias versões
                </p>
                <p className="mt-0.5 text-xs text-slate-400">Restauro rápido sem complicações</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <RefreshCw className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span>Cópia automática de fotografias do telemóvel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
