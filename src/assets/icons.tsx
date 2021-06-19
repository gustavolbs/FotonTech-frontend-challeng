// import { ReactComponent as BilletSVG } from '@assets/svg/billet.svg';
import { colors } from '@styles/colors';

import React from 'react';
import * as BI from 'react-icons/bi';
import * as FI from 'react-icons/fi';

export const icons = {
  home: <BI.BiHome />,
  profile: <BI.BiUser />,
  libraries: <FI.FiBook />,
};

export type IconsType = keyof typeof icons;
