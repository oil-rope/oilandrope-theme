import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const LoaderPropTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'extra',
    'info',
    'warning',
    'danger',
    'success',
    'dark',
    'light',
  ]),
};
const LoaderDefaults = {
  text: 'Loading...',
};

type LoaderTypes = InferProps<typeof LoaderPropTypes>;
const Loader: FC<LoaderTypes> = ({ text, color }) => {
  return (
    <>
      <span
        className={`spinner-border spinner-border-sm ${
          color ? `text-${color}` : ''
        }`}
        role="status"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">{text}</span>
    </>
  );
};

Loader.propTypes = LoaderPropTypes;
Loader.defaultProps = LoaderDefaults;

export default Loader;
