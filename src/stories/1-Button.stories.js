import React from 'react';
import { ButtonIcon, ButtonPrimary, ExternalLink, GoHome } from '../components/core';

export default {
  title: 'Button',
};

export const buttonIcon = () => (
  <div style={{ width: '280px' }}>
    <ButtonIcon>Button w/Icon</ButtonIcon>
  </div>
);

export const buttonPrimary = () => (
  <div style={{ width: '280px' }}>
    <ButtonPrimary>Primary</ButtonPrimary>
  </div>
);

export const externalLink = () => (
  <div style={{ width: '280px' }}>
    <ExternalLink url='https://unauthapp.com'>Link</ExternalLink>
  </div>
);

export const homeButton = () => <GoHome />
