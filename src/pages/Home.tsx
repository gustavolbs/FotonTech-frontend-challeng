import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/book/123">book 123</Link>
    </>
  );
};

export default Home;
