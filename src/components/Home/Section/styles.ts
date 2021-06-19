import { colors } from '@styles/colors';
import styled from 'styled-components';

interface Container {
  paddingRight: boolean;
}

export const Container = styled.div<Container>`
  height: 176px;

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
    width: 100%;
  }

  &:not(:first-child) {
    margin-top: 32px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
