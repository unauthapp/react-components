import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';


const StyledImage = styled.img`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin: ${props => props.theme.margin};
  cursor: pointer;
`;

const theme = {
  width: '50px',
  hegiht: '50px',
  magin: '10px'
};

export default class Image extends React.Component {

  render() {
    const inputTheme = {...theme, ...this.props}
    return (
      <ThemeProvider theme={inputTheme}>
        <StyledImage src={this.props.src} href={this.props.href} onClick={this.props.onClick} />
      </ThemeProvider>
    )
  }
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Image.defaultProps = {
  src: '#',
  href: '#',
  onClick: () => console.log('No click handler specified')
};