import React from 'react';
import { InputText } from '../components/core';

export default {
  title: 'InputText'
};

export const inputText = () => <InputText placeholder='Enter text' />

export const inputTextDisabled = () => <InputText placeholder='Disabled input text' disabled />
