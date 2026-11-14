export type BillingCycle = 'monthly' | 'annual';

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  storage: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  featured?: boolean;
  highlights: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    subtitle: 'Ideal para experimentar',
    storage: '5 GB',
    monthlyPrice: 0,
    annualMonthlyPrice: 0,
    highlights: [
      'Encriptação privada de ponta-a-ponta',
      'Sincronização em até 2 dispositivos',
      'Partilha de ficheiros com palavra-passe',
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Mais espaço para o dia a dia',
    storage: '100 GB',
    monthlyPrice: 2.49,
    annualMonthlyPrice: 1.99,
    highlights: [
      'Dispositivos ilimitados sincronizados',
      'Cópia automática de fotografias',
      'Histórico de versões de 30 dias',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    subtitle: 'Equilíbrio ideal para uso contínuo',
    storage: '500 GB',
    monthlyPrice: 5.99,
    annualMonthlyPrice: 4.79,
    featured: true,
    highlights: [
      'Tudo no Starter incluído',
      'Links de partilha com validade e limite',
      'Histórico de versões de 90 dias',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Para ficheiros pesados e criadores',
    storage: '1 TB',
    monthlyPrice: 9.99,
    annualMonthlyPrice: 7.99,
    highlights: [
      'Velocidade prioritária nos envios',
      'Pasta privada com bloqueio extra',
      'Recuperação rápida de ficheiros apagados',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    subtitle: 'Para equipas e empresas',
    storage: '2 TB',
    monthlyPrice: 19.99,
    annualMonthlyPrice: 15.99,
    highlights: [
      'Gestão centralizada de acessos da equipa',
      'Registo de atividade e conformidade RGPD',
      'Suporte técnico dedicado 24/7',
    ],
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Privacidade Total',
    description: 'Só tu consegues abrir os teus ficheiros.',
  },
  {
    title: 'Acesso em Todo o Lado',
    description: 'Disponível no computador, telemóvel e navegador.',
  },
  {
    title: 'Sincronização Automática',
    description: 'As tuas pastas ficam atualizadas sem esforço.',
  },
  {
    title: 'Partilha Segura',
    description: 'Envia links com prazo de validade e palavra-passe.',
  },
  {
    title: 'Alojado na Europa',
    description: 'Os teus dados ficam protegidos na União Europeia.',
  },
];

export interface ArchitectureTab {
  id: 'privacy' | 'storage' | 'control';
  label: string;
  headline: string;
  summary: string;
  specs: { label: string; value: string }[];
}

export const ARCHITECTURE_TABS: ArchitectureTab[] = [
  {
    id: 'privacy',
    label: 'Privacidade dos Ficheiros',
    headline: 'Ninguém, nem a Kripta Cloud, consegue ver o que guardas.',
    summary:
      'Antes de qualquer documento ou fotografia sair do teu telemóvel ou computador, é trancado com uma chave associada à tua palavra-passe. Os nossos servidores guardam apenas informação ilegível para terceiros.',
    specs: [
      { label: 'Proteção de ficheiros', value: 'Encriptação privada no dispositivo' },
      { label: 'Acesso ao conteúdo', value: 'Exclusivo do utilizador' },
      { label: 'Ligação à internet', value: 'Canal encriptado de ponta-a-ponta' },
      { label: 'Partilha externa', value: 'Links com validade e palavra-passe' },
    ],
  },
  {
    id: 'storage',
    label: 'Onde Ficam Guardados',
    headline: 'Infraestrutura europeia rápida e preparada para durar.',
    summary:
      'Os teus ficheiros são guardados em armazenamento distribuído na Europa com várias cópias de segurança automáticas, evitando perdas mesmo que exista uma falha técnica num equipamento.',
    specs: [
      { label: 'Localização física', value: 'União Europeia' },
      { label: 'Proteção contra falhas', value: 'Réplicas automáticas de segurança' },
      { label: 'Disponibilidade', value: 'Acesso contínuo 24 horas por dia' },
      { label: 'Desempenho', value: 'Entrega rápida em toda a Europa' },
    ],
  },
  {
    id: 'control',
    label: 'Controlo e Leis Europeias',
    headline: 'Os teus ficheiros são teus, sem anúncios nem rastreamento.',
    summary:
      'Não analisamos os teus documentos, não vendemos dados a terceiros e seguimos rigorosamente as regras europeias de proteção de dados (RGPD). Podes recuperar versões anteriores ou descarregar tudo quando quiseres.',
    specs: [
      { label: 'Legislação aplicável', value: 'Normas europeias (RGPD)' },
      { label: 'Publicidade e análise', value: 'Zero rastreamento de ficheiros' },
      { label: 'Histórico de versões', value: 'Recuperação até 90 dias' },
      { label: 'Portabilidade', value: 'Descarga integral a qualquer momento' },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'A Kripta Cloud consegue ver os ficheiros que guardo?',
    answer:
      'Não. Os ficheiros são protegidos diretamente no teu dispositivo antes de serem enviados. Sem a tua palavra-passe, ninguém consegue abrir ou ler o conteúdo guardado.',
  },
  {
    question: 'Em que aparelhos posso usar a Kripta Cloud?',
    answer:
      'Podes aceder às tuas pastas em computadores (Windows, macOS e Linux), telemóveis e tablets (iOS e Android) ou diretamente no navegador através de kriptacloud.com.',
  },
  {
    question: 'Onde ficam guardados os meus documentos e fotografias?',
    answer:
      'Todos os ficheiros são armazenados em servidores situados na União Europeia, garantindo maior rapidez de acesso na Europa e proteção total pelas leis europeias de privacidade (RGPD).',
  },
  {
    question: 'Quando será possível criar conta?',
    answer:
      'A Kripta Cloud encontra-se atualmente em desenvolvimento. Esta página apresenta as funcionalidades e os planos previstos antes da abertura oficial do serviço em kriptacloud.com.',
  },
];
