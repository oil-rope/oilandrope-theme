import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { ICONS } from '@/OARConstants';

const IconPropTypes = {
  icon: PropTypes.oneOf(ICONS),
};

type IconTypes = InferProps<typeof IconPropTypes>;
const Icon: FC<IconTypes> = ({ icon }) => {
  return (
    <tr>
      <td>
        <i className={`ic-${icon}`}></i>
      </td>
      <td>
        <code>&lt;i class=&#34;ic-{icon}&#34;&gt;</code>
      </td>
    </tr>
  );
};

Icon.propTypes = IconPropTypes;

export default Icon;
