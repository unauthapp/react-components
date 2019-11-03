import React from 'react';
import { FailedIcon, Icon } from '../components/core';

import { ICONS, COLORS } from '../constants';

export default {
  title: 'Icon',
};

export const failedIcon = () => <FailedIcon />

export const arrowRightIcon = () => (
  <Icon 
    name={ICONS.NAMES.ARROW_RIGHT} 
    width='200px' height='200px' 
    color={COLORS.PALETTE.PRIMARY} 
  />
);

export const sensorIcon = () => (
  <Icon 
    name={ICONS.NAMES.SENSOR} 
    width='200px' height='200px' 
    color={COLORS.PALETTE.PRIMARY} 
  />
);
