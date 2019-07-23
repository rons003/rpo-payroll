interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Master File'
  },
  {
    name: 'Employee Master Data',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: '201 FILE',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Loan File',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Payroll'
  },
  {
    name: 'Payroll Processing',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Manual Payroll',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
];
