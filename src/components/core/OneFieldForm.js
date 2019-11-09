import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonIcon, InputText } from '../core';

import { CONSTANTS } from '../../constants';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: auto;
  width: 100%;
`;

export default class OneFieldForm extends React.Component {

  render() {
    return (
      <Container>
        <InputText id={this.props.fieldId} placeholder={this.props.placeholder} onChange={this.props.onChange} />
        <ButtonIcon width='80px' onClick={this.props.onClick}>{this.props.buttonNext}</ButtonIcon>
      </Container>
    )
  }
};

OneFieldForm.propTypes = {
  fieldId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonNext: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

OneFieldForm.defaultProps = {
  fieldId: CONSTANTS.PLACEHOLDER.FIELD_ID,
  placeholder: CONSTANTS.PLACEHOLDER.INPUT,
  buttonNext: CONSTANTS.LABELS.BUTTON,
  onChange: () => console.log('No change handler specifcied'),
  onClick: () => console.log('No click handler specifcied')
};