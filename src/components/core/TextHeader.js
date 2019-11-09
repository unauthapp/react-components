import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { COLORS, CONSTANTS } from '../../constants';


const StyledText = styled.div`
  color: ${COLORS.PALETTE.TEXT_PRIMARY};
  font-size: 40px;
`;

export default class TextHeader extends React.Component {
  render() {
    return (
      <StyledText>{this.props.children}</StyledText>
    )
  }
};

TextHeader.propTypes = {
  children: PropTypes.string.isRequired
};

TextHeader.defaultProps = {
  children: CONSTANTS.PLACEHOLDER.HEADER
};
