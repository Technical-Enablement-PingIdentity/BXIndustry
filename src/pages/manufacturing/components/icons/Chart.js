import React from 'react';

export function Chart({ fill = '#fff', className }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="2" fill={fill} />
      <rect x="4.24243" y="11.0303" width="4.24242" height="12.7273" fill="#EEEFF0" />
      <rect x="11.8789" y="3.39392" width="4.24242" height="20.3636" fill="#EEEFF0" />
      <rect x="19.5151" y="16.1212" width="4.24242" height="7.63636" fill="#EEEFF0" />
    </svg>
  )
}