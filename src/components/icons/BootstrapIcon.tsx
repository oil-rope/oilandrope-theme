import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { BOOTSTRAP_ICONS } from '@/OARConstants';

const BootstrapIconPropTypes = {
  icon: PropTypes.oneOf(BOOTSTRAP_ICONS),
};

type BootstrapIconTypes = InferProps<typeof BootstrapIconPropTypes>;
const BootstrapIcon: FC<BootstrapIconTypes> = ({ icon }) => {
  return (
    <tr>
      <td>
        <i className={`bi-${icon}`}></i>
      </td>
      <td>
        <code>&lt;i class=&#34;bi-{icon}&#34;&gt;</code>
      </td>
    </tr>
  );
};

export default BootstrapIcon;
