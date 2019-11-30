import React from 'react';
import { ToastMessage } from '../components/core';
import { CONSTANTS } from '../constants';


export default {
  title: 'Toast'
};

export const success = () => <ToastMessage text='This is a success toast' visible />
export const fail = () => <ToastMessage text='This is a fail toast' type={CONSTANTS.STATUS.FAIL} visible />
