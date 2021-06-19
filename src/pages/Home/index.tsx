import { Section } from '@/components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Greeting } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <span>icon</span>
        <input type="text" placeholder="Search Book" />
      </div>

      <Greeting>
        <h1>
          Hi, <span>Your Name</span> 👋
        </h1>
      </Greeting>

      <Section
        title="Discover new Book"
        moreText="More"
        data={[]}
        paddingRight={false}
      />

      <Section title="Currently reading" moreText="All" data={[]} />

      <Section title="Reviews of The Days" moreText="All Video" data={[]} />

      <Link to="/book/123">book 123</Link>
    </Container>
  );
};

export default Home;
