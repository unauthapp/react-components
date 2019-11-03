import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ButtonIcon from './ButtonIcon';
import { CONSTANTS } from '../../constants';


const StyledAnchor = styled.a`
  text-decoration: none;
`;

export default class ExternalLink extends React.Component {

  render() {
    return (
      <StyledAnchor href={this.props.url} target='_blank'>
        <ButtonIcon>{this.props.children}</ButtonIcon>
      </StyledAnchor>
    );
  }
}


ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

ExternalLink.defaultProps = {
  url: '#',
  children: CONSTANTS.LABELS.BUTTON
};

