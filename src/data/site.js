import {
  CodeXml,
  Crosshair,
  Fingerprint,
  Gauge,
  Globe2,
  LayoutTemplate,
  MonitorSmartphone,
  PanelsTopLeft,
  Utensils,
} from 'lucide-react';

const whatsappNumber = '5546999749956';
const whatsappMessage =
  'Olá! Conheci a Zentrai pelo site e gostaria de solicitar uma prévia para minha empresa.';

export const links = {
  home: '#inicio',
  projects: '#projetos',
  services: '#servicos',
  process: '#processo',
  contact: '#contato',
  instagram: 'https://www.instagram.com/zentrai.tech/',
  instagramHandle: '@zentrai.tech',
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
};

export const navigation = [
  { label: 'Projetos', href: links.projects },
  { label: 'Serviços', href: links.services },
  { label: 'Como funciona', href: links.process },
  { label: 'Contato', href: links.contact },
];

export const services = [
  {
    title: 'Sites institucionais',
    description: 'Sites profissionais para empresas apresentarem seus serviços, diferenciais e informações.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Landing pages',
    description: 'Páginas estratégicas com foco em transformar visitantes em contatos.',
    icon: LayoutTemplate,
  },
  {
    title: 'Cardápios digitais',
    description: 'Cardápios modernos para consulta por QR Code ou link na bio do Instagram, sem carrinho ou sistema de pedidos.',
    icon: Utensils,
  },
  {
    title: 'Soluções personalizadas',
    description: 'Projetos digitais desenvolvidos conforme as necessidades de cada empresa.',
    icon: CodeXml,
  },
];

export const steps = [
  { title: 'Primeiro contato', description: 'Conversamos para entender seu negócio e seus objetivos.' },
  { title: 'Prévia do projeto', description: 'Desenvolvemos uma ideia inicial para você visualizar o potencial do seu site.' },
  { title: 'Desenvolvimento', description: 'Personalizamos o projeto com sua identidade, serviços e informações.' },
  { title: 'Publicação', description: 'Deixamos seu site pronto para ser acessado em diferentes dispositivos.' },
];

export const benefits = [
  { label: 'Design exclusivo e profissional', icon: Fingerprint },
  { label: 'Sites responsivos', icon: MonitorSmartphone },
  { label: 'Carregamento rápido', icon: Gauge },
  { label: 'Integração com WhatsApp', icon: 'whatsapp' },
  { label: 'Atenção aos detalhes', icon: Crosshair },
  { label: 'Experiência de navegação moderna', icon: Globe2 },
];
