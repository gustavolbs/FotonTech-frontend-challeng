import Navbar from '@components/General/Navbar';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import { RouteProps, routeList } from './routeList';

const Routes: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    document.addEventListener('doNotShowNavbar', () => {
      console.log('NÃO SHOW');
      setShowNavbar(false);
    });
    return () => {
      document.removeEventListener('doNotShowNavbar', () => {
        setShowNavbar(false);
      });
    };
  }, []);

  useEffect(() => {
    document.addEventListener('showNavbar', () => {
      console.log('SHOW');

      setShowNavbar(true);
    });
    return () => {
      document.removeEventListener('showNavbar', () => {
        setShowNavbar(true);
      });
    };
  }, []);

  return (
    <BrowserRouter>
      {showNavbar && <Navbar />}
      <Switch>
        {routeList.map((routeProps: RouteProps) => (
          <Route key={`route#${routeProps.path}`} {...routeProps} />
        ))}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
