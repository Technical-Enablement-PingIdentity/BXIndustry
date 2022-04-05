import React from 'react';

export function Factory({ fill = '#fff', className }) {
  return (
    <svg className={className} width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 26.8125H0L3.4375 0H7.5625L11 26.8125Z" fill={fill} />
      <path d="M33 26.8125H12.375L11.6875 22H14.4375V16.5H11L10.3125 12.375L16.5 9.625V13.75L24.75 9.625V14.4375L33 10.3125V26.8125Z" fill="#0E264C" />
      <rect x="17.875" y="16.5" width="5.5" height="5.5" fill="#EEEFF0" />
      <rect x="26.125" y="16.5" width="5.5" height="5.5" fill="#EEEFF0" />
    </svg>
  )
}