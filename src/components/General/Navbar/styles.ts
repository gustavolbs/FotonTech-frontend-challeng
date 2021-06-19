import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: ${colors.navbarBackground};

  a {
    height: 40px;
    text-decoration: none;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.navbarInactive};

    &.active {
      color: ${colors.navbarActive};
    }

    svg {
      width: 100%;
      height: 100%;
      margin-bottom: 4px;
    }
  }
`;
