import React from 'react';
import { InputText } from '../components/core';

export default {
  title: 'InputText'
};

export const text = () => <InputText placeholder='Enter text' />

export const textDisabled = () => <InputText placeholder='Disabled input text' disabled />
