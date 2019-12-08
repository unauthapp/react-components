import React from 'react';
import { FailedIcon, Icon, SuccessIcon } from '../components/core';

import { ICONS, COLORS } from '../constants';

export default {
  title: 'Icon',
};

export const failed = () => <FailedIcon />

export const success = () => <SuccessIcon />

export const arrowRight = () => (
  <Icon 
    name={ICONS.NAMES.ARROW_RIGHT} 
    width='200px' height='200px' 
    color={COLORS.PALETTE.PRIMARY} 
  />
);

export const sensor = () => (
  <Icon 
    name={ICONS.NAMES.SENSOR} 
    width='200px' height='200px' 
    color={COLORS.PALETTE.PRIMARY} 
  />
);
