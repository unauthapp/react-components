import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ButtonIcon from '../core/ButtonIcon';
import InputText from '../core/InputText';


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
  fieldId: 'oneFieldFormId',
  placeholder: 'Enter input',
  buttonNext: 'Button',
  onChange: () => console.log('No change handler specifcied'),
  onClick: () => console.log('No click handler specifcied')
};