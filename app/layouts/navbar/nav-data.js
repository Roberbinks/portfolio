import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projets',
    pathname: '/#project-1',
  },
  {
    label: 'Parcours',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
