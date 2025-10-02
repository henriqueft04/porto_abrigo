import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Início',
      href: getPermalink('/'),
    },
    {
      text: 'Propostas',
      links: [
        {
          text: 'Visão Geral',
          href: '#propostas',
        },
        {
          text: 'Propostas Detalhadas',
          href: '#propostas-detalhadas',
        },
        {
          text: 'Compromissos',
          href: '#compromissos',
        },
      ],
    },
    {
      text: 'Equipa',
      links: [
        {
          text: 'Liderança',
          href: '#lideranca',
        },
        {
          text: 'Candidatos',
          href: '#equipa',
        },
      ],
    },
  ],
  actions: [{ text: 'Apoiar Candidatura', href: getPermalink('/contact'), icon: 'tabler:heart' }],
};

export const footerData = {
  links: [
    {
      title: 'Candidatura',
      links: [
        { text: 'Propostas', href: getPermalink('/#propostas') },
        { text: 'Equipa', href: getPermalink('/#equipa') },
        { text: 'Compromissos', href: getPermalink('/#compromissos') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Secretarias',
      links: [
        { text: 'Chefia Regional', href: getPermalink('/#propostas-detalhadas') },
        { text: 'Adultos', href: getPermalink('/#propostas-detalhadas') },
        { text: 'Desenvolvimento', href: getPermalink('/#propostas-detalhadas') },
        { text: 'Gestão & Finanças', href: getPermalink('/#propostas-detalhadas') },
        { text: 'Património & Pedagogia', href: getPermalink('/#propostas-detalhadas') },
      ],
    },
    {
      title: 'Região do Porto',
      links: [
        { text: 'Núcleo Cidade do Porto', href: '#' },
        { text: 'Núcleo Este', href: '#' },
        { text: 'Núcleo Litoral', href: '#' },
        { text: 'Núcleo Norte', href: '#' },
        { text: 'Núcleo Centro Norte', href: '#' },
        { text: 'Núcleo Terras de Santa Maria', href: '#' },
      ],
    },
    {
      title: 'Escutismo',
      links: [
        { text: 'Corpo Nacional de Escutas', href: 'https://www.escutismo.pt', target: '_blank' },
        { text: 'Região do Porto', href: '#' },
        { text: 'WOSM', href: 'https://www.scout.org', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:geral@portodeabrigo.com' },
  ],
  footNote: `
    Candidatura <strong>Porto de Abrigo</strong> · Junta Regional do Porto 2025-2028 - Site by Henrique Teixeira.
  `,
};
