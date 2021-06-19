import { icons } from '@assets/icons';
import * as pages from '@pages';
import { RouteProps as ReactDOMRouterProps } from 'react-router-dom';

export interface RouteProps extends ReactDOMRouterProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  showNavbar?: boolean;
  navbar: boolean;
  group?: string;
  key?: string;
  title?: string;
  icon?: JSX.Element; // IconType | SVG
}

export const routeList: RouteProps[] = [
  {
    path: '/',
    component: pages.Home,
    title: 'Home',
    group: 'Home',
    exact: true,
    navbar: true,
    icon: icons.home,
  },
  {
    path: '/book/:id',
    component: pages.BookDetails,
    title: 'BookDetails',
    group: 'Home',
    showNavbar: false,
    exact: false,
    navbar: false,
  },
  {
    path: '/search',
    title: 'BookSearch',
    component: pages.BookSearch,
    group: 'Home',
    exact: false,
    navbar: false,
  },
  {
    path: '/libraries',
    component: pages.Home,
    title: 'Libraries',
    exact: false,
    navbar: true,
    icon: icons.libraries,
  },
  {
    path: '/profile',
    component: pages.Home,
    title: 'Profile',
    exact: false,
    navbar: true,
    icon: icons.profile,
  },
];
