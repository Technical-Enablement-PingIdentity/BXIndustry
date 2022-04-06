import React from 'react';

export function CloseIcon({ fill = '#000', className }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.02075 1.27002L11.9809 12.2302" stroke={fill} />
      <path d="M11.9807 1.27002L1.02056 12.2302" stroke={fill} />
    </svg>
  )
}