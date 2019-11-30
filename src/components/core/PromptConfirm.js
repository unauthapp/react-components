import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import COLORS from '../../constants/colors';
import { CONSTANTS } from '../../constants';
import { ButtonPrimary, Text } from '.';


const ParentContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
`;

const StyledDiv = styled.div`
  position: absolute;
  z-index: 100;
  width: 600px;
  height: 300px;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -200px;
  text-align: center;
  background-color: ${COLORS.PALETTE.WHITE};
  border-radius: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  pointer: cursor;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  text-align: center;
  background-color: ${COLORS.PALETTE.LIGHT_GRAY};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 10px;
`;

export default class PromptConfirm extends React.Component {

  render() {

    const { visible, text, onOk, onCancel } = this.props;

    return (
      <React.Fragment>
        {
          visible &&
          <ParentContainer>
            <StyledDiv>
              <Header>
                <Text fontSize='25px' fontWeight='bold' color={COLORS.PALETTE.TEXT_BLACK}>
                  {CONSTANTS.MESSAGES.TITLE.CONFIRM}
                </Text>
              </Header>
              <Container>
                <Text fontSize='20px' fontWeight='normal' color={COLORS.PALETTE.TEXT_BLACK}>
                  {text}
                </Text>
                <ButtonContainer>
                  <ButtonPrimary onClick={onOk}>{CONSTANTS.MESSAGES.BUTTON.OK}</ButtonPrimary>
                  <ButtonPrimary onClick={onCancel}>{CONSTANTS.MESSAGES.BUTTON.CANCEL}</ButtonPrimary>
                </ButtonContainer>
              </Container>
            </StyledDiv>
          </ParentContainer>
        }
      </React.Fragment>
    )
  }
};


PromptConfirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

PromptConfirm.defaultProps = {
  visible: false,
  text: CONSTANTS.PLACEHOLDER.TEXT,
  onOk: () => console.log('No ok handler specifcied'),
  onCancel: () => console.log('No cancel handler specifcied')
};