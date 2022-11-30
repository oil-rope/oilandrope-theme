import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { COLORS } from '@/OARConstants';

const ColorPropTypes = {
  colorName: PropTypes.oneOf(COLORS).isRequired,
  colorHex: PropTypes.string.isRequired,
};

type ColorTypes = InferProps<typeof ColorPropTypes>;
const Color: FC<ColorTypes> = ({ colorName, colorHex }) => {
  return (
    <div className={`p-3 mb-3 bg-${colorName} fw-bold`}>
      {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
      <br />
      <span className="small fw-light">{colorHex}</span>
    </div>
  );
};

Color.propTypes = ColorPropTypes;

export default Color;
