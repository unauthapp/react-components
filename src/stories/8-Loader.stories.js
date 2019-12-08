import React from 'react';
import { ReceiveLoader, SendLoader } from '../components/core';


export default {
  title: 'Loaders'
};

export const receive = () => <ReceiveLoader />

export const send = () => <SendLoader />
