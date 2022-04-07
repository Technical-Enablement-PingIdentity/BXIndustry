import React from 'react';

export function NotificationIcon({ fill = '#fff', className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 17V9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9V17L17 20H1L3 17Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3V1" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 20C7 21.1046 7.89543 22 9 22C10.1046 22 11 21.1046 11 20" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}