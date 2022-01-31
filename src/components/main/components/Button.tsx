import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { COLORS } from '@/OARConstants';

const ButtonPropTypes = {
  color: PropTypes.oneOf([...COLORS, 'link']).isRequired,
};

type ButtonTypes = InferProps<typeof ButtonPropTypes>;
const Button: FC<ButtonTypes> = ({ color }) => {
  if (color === 'link') {
    return (
      <a type="button" className="btn btn-link btn-outline-primary link-dark">
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </a>
    );
  } else {
    return (
      <button type="button" className={`btn btn-${color} m-1`}>
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </button>
    );
  }
};

Button.propTypes = ButtonPropTypes;

export default Button;
