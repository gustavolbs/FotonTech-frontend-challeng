import { colors } from '@styles/colors';
import styled from 'styled-components';

interface Container {
  paddingRight: boolean;
}

export const Container = styled.div<Container>`
  margin-bottom: 32px;

  header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.5px;
      color: ${colors.sectionHeaderTitle};

      &:last-child {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${colors.sectionHeaderMore};
      }
    }
  }

  main {
    display: flex;
    padding-left: 20px;
    padding-right: ${({ paddingRight }) => (paddingRight ? '20px' : '0')};
    height: 100%;
    margin-top: 8px;
  }

  &.discoverNewBook main {
    & > div {
      height: 128px;
      transform: scale(0.8);

      &:first-child {
        background: ${colors.discoverNewBookFirstChild};
        border-radius: 4px;
        box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
        color: ${colors.discoverNewBookFirstChildText};
        transform: scale(1);
        min-width: 70%;
      }
    }
  }
`;

interface Card {
  firstCardWidth: string;
}

export const Card = styled.div<Card>`
  display: flex;
  width: 100%;
  max-width: ${({ firstCardWidth }) => firstCardWidth};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
`;
