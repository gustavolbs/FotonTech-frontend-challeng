import React from 'react';

import { Container, LeftSide } from './styles';

interface Section {
  title: string;
  moreText: string;
  data: [];
  paddingRight?: boolean;
}

const Section: React.FC<Section> = ({
  data,
  moreText,
  title,
  paddingRight = true,
}: Section) => {
  return (
    <Container paddingRight={paddingRight}>
      <header>
        <span>{title}</span>
        <span>{moreText}</span>
      </header>

      <main>
        <LeftSide>
          <div>
            <span>Title</span>
            <span>Author</span>
          </div>
          <span>120+ read now</span>
        </LeftSide>
        <img src="" alt="" />
      </main>
    </Container>
  );
};

export default Section;
