import React from 'react';

import { Card, Container, LeftSide } from './styles';

interface Section {
  title: string;
  moreText: string;
  data: [];
  paddingRight?: boolean;
  firstCardWidth?: string;
  [props: string]: any;
}

const Section: React.FC<Section> = ({
  data,
  moreText,
  title,
  paddingRight = true,
  firstCardWidth = '100%',
  ...props
}: Section) => {
  return (
    <Container paddingRight={paddingRight} {...props}>
      <header>
        <span>{title}</span>
        <span>{moreText}</span>
      </header>

      <main>
        <Card firstCardWidth={firstCardWidth}>
          <LeftSide>
            <div>
              <span>Title</span>
              <span>Author</span>
            </div>
            <span>120+ read now</span>
          </LeftSide>
          <img src="" alt="" />
        </Card>

        <Card firstCardWidth={firstCardWidth}>
          <LeftSide>
            <div>
              <span>Title</span>
              <span>Author</span>
            </div>
            <span>120+ read now</span>
          </LeftSide>
          <img src="" alt="" />
        </Card>
      </main>
    </Container>
  );
};

export default Section;
