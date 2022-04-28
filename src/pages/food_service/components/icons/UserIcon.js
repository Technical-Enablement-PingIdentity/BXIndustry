import React from 'react';

export function UserIcon({ fill = '#fff', className }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.49536 7C5.54635 7 4 5.45196 4 3.50005C4 1.54813 5.6104 0 7.49536 0C9.38033 0 11 1.54813 11 3.50005C11 5.45196 9.45353 7 7.49536 7Z" fill={fill} />
      <path d="M8 16C4.75959 16 1.37914 15.2736 0.349015 14.349C0.0589789 14.0849 -0.090957 13.6887 0.0590618 13.2925C0.429108 12.3019 2.03925 9 8 9C13.9607 9 15.5709 12.3019 15.9409 13.2925C16.091 13.6887 15.941 14.0849 15.651 14.349C14.6209 15.2736 11.3104 16 8 16Z" fill={fill} />
    </svg>
  )
}