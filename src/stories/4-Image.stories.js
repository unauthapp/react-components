import React from 'react';
import { Image } from '../components/core';

import Logo from '../logo.png'

export default {
  title: 'Image',
};

export const image = () => <Image width='150px' height='40px' src={Logo} />
