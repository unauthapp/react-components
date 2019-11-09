import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '.';


export default class Logo extends React.Component {

  render() {
    return (
      <Image width='185px' height='45px' margin='5px' src={this.props.logo} onClick={this.props.onClick} />
    )
  }
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Logo.defaultProps = {
  src: '#',
  onClick: () => console.log('No click handler specifcied')
};
