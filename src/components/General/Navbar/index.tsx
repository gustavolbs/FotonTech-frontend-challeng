import { routeList, RouteProps } from '@routes/routeList';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      {routeList.map((route: RouteProps) =>
        route.navbar ? (
          <Link
            key={route.path}
            to={route.path}
            // just for demonstration the Home is always active
            className={route?.group === 'Home' ? 'active' : 'inactive'}
          >
            {route.icon}
            {route.title}
          </Link>
        ) : (
          ''
        ),
      )}
    </Container>
  );
};

export default Navbar;
