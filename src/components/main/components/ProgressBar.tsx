import React, { FC, Fragment } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { COLORS } from '@Root/OARConstants';

const ProgressBarPropTypes = {
  color: PropTypes.oneOf(COLORS).isRequired,
  percentage: PropTypes.number.isRequired,
};

type ProgressBarTypes = InferProps<typeof ProgressBarPropTypes>;
const ProgressBar: FC<ProgressBarTypes> = ({ color, percentage }) => {
  return (
    <Fragment>
      <h4 className="small">
        {color.charAt(0).toUpperCase() + color.slice(1)} bar{' '}
        <span className="float-end">{percentage}%</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </Fragment>
  );
};

ProgressBar.propTypes = ProgressBarPropTypes;

export default ProgressBar;
