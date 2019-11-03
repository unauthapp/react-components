import React from 'react';

export default {
  title: 'Welcome',
};

export const toStorybook = () => (
  <div style={{ margin: '40px' }}>
    <div><b>Welcome to Unauth React Components</b></div>
    <p>This project contains all the components used across all the react apps of Unauth</p>
    <p>In this storybook we will have all the components demo listed down</p>
    <p><b>Font: </b>Lato</p>
  </div>
)

toStorybook.story = {
  name: 'to Unauth React Components',
};
