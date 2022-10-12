import IconsJSON from '@Icons/selection.json';
import BootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.json';

export const COLORS = [
  'primary',
  'secondary',
  'extra',
  'info',
  'warning',
  'danger',
  'success',
  'dark',
  'light',
];

export const MENUS = [
  { name: 'Home', link: '/' },
  { name: 'Icons', link: '/icons' },
];

export const ICONS = IconsJSON.icons.map((icon) => icon.properties.name);
export const BOOTSTRAP_ICONS = Object.keys(BootstrapIcons);
