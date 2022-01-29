import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ colorName, colorHex }) => {
  return (
    <div className={`p-3 mb-3 bg-${colorName.toLowerCase()} fw-bold rounded`}>
      {colorName}
      <br />
      <span className="small fw-light">{colorHex}</span>
    </div>
  );
};

Color.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorHex: PropTypes.string.isRequired,
};

export default Color;
