import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
`;

export const Greeting = styled.div`
  padding: 0 20px;

  h1 {
    font-weight: 400;
    font-size: 24px;
    color: ${colors.greeting};

    span {
      font-weight: 600;
      color: ${colors.greetingName};
    }
  }
`;
