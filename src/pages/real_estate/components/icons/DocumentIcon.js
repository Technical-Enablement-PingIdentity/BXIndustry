import React from 'react';

export function DocumentIcon({ fill = '#32B668', className }) {
  return (
    <svg className={className} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4141 0H0V20H16V4.5859L11.4141 0ZM14 18H2V2H10.5856L14 5.4144V18ZM4 12.95H9V11.05H4V12.95ZM4 8.95H12V7.05H4V8.95Z" fill={fill} />
    </svg>
  )
}