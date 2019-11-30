import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Text from './Text';

import { COLORS, CONSTANTS } from '../../constants';


const StyledDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${props => props.theme.color};
  border-radius: 3px;
  box-shadow: 0 3px 60px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const theme = {
  color: COLORS.PALETTE.SUCCESS
};

export default class ToastMessage extends React.Component {

  render() {

    const { visible, type, text } = this.props;

    return (
      <React.Fragment>
        {
          visible &&
          <ThemeProvider theme={theme}>
            <StyledDiv theme={{ color: COLORS.PALETTE[type] }}>
              <Text fontSize='16px' color={COLORS.PALETTE.WHITE}>{text}</Text>
            </StyledDiv>
          </ThemeProvider>
        }
      </React.Fragment>
    )
  }
};


ToastMessage.propTypes = {
  visible: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([CONSTANTS.STATUS.SUCCESS, CONSTANTS.STATUS.FAIL]),
  text: PropTypes.string.isRequired
};

ToastMessage.defaultProps = {
  visible: false,
  text: CONSTANTS.PLACEHOLDER.POPUP,
  type: CONSTANTS.STATUS.SUCCESS
};