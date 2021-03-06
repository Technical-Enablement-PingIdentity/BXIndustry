import React from 'react';

export function CheckIcon({ fill = '#fff', className }) {
  return (
    <svg className={className} width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 4.5L5 9L12 1" stroke={fill} strokeWidth="2" />
    </svg>
  )
}