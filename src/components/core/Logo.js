import React from 'react';

import { Image } from '.';


export default class Logo extends React.Component {

  render() {
    return (
      <Image width='185px' height='45px' margin='5px' src={this.props.logo} onClick={this.props.onClick} />
    )
  }
}
