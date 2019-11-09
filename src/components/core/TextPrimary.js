import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { COLORS, CONSTANTS } from '../../constants';


const StyledText = styled.div`
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  letter-spacing: ${props => props.theme.letterSpacing};
`;

const theme = {
  color: COLORS.PALETTE.TEXT_PRIMARY,
  fontSize: '25px',
  fontWeight: 'normal',
  letterSpacing: '0px'
};

export default class TextPrimary extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledText theme={{...this.props}}>{this.props.children}</StyledText>
      </ThemeProvider>
    )
  }
};

TextPrimary.propTypes = {
  children: PropTypes.string.isRequired
};

TextPrimary.defaultProps = {
  children: CONSTANTS.PLACEHOLDER.TEXT_PRIMARY
};

