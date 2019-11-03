import React from 'react';
import { FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants';


export default class GoHome extends React.Component {

  render() {
    return (
      <FaHome
        color={COLORS.PALETTE.PRIMARY}
        style={{
          margin: 'auto',
          filter: `drop-shadow(10px 5px 5px ${COLORS.PALETTE.SHADOW})`,
          cursor: 'pointer'
        }}
        onClick={this.props.onClick}
      />
    );
  }
}


GoHome.propTypes = {
  onClick: PropTypes.func.isRequired
};

GoHome.defaultProps = {
  onClick: () => console.log("No click handler specified")
};

