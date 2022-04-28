import React from 'react';

export function ExpandArrow({ fill = '#fff', className }) {
  return (
    <svg className={className} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke={fill} strokeWidth="1.5" />
    </svg>

  )
}