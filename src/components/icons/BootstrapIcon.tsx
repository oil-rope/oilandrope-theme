import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { BOOTSTRAP_ICONS } from '@/OARConstants';

const IconPropTypes = {
  icon: PropTypes.oneOf(BOOTSTRAP_ICONS).isRequired,
};

type IconTypes = InferProps<typeof IconPropTypes>;
const BootstrapIcon: FC<IconTypes> = ({ icon }) => {
  return (
    <tr>
      <td>
        <i className={`bi bi-${icon}`}></i>
      </td>
      <td>
        <code>&lt;i class=&#34;bi bi-{icon}&#34;&gt;</code>
      </td>
    </tr>
  );
};

export default BootstrapIcon;
