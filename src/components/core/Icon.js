import React from 'react';
import PropTypes from 'prop-types';

import { ICONS } from '../../constants';


const getViewBox = name => {
  if (!ICONS.VIEWBOX[name]) {
    return '0 0 32 32'
  }

  return ICONS.VIEWBOX[name];
};

const getPath = (name, props) => {
  if (!ICONS.PATHS[name]) {
    return (
      <path />
    )
  }

  return (
    <React.Fragment>
      {ICONS.PATHS[name].map(path => {
        return <path
          key={name + path}
          {...props}
          d={path}
        />
      })}
    </React.Fragment>
  )
};

const Icon = ({ name, style, color, viewBox, width, className, height }) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    {getPath(name, { fill: color })}
  </svg>
);

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

Icon.defaultProps = {
  name: '',
  style: {},
  color: '#000',
  viewBox: '',
  width: '100%',
  className: '',
  height: '100%'
};
