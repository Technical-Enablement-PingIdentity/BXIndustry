import React from 'react';

export function Facebook({ fill = '#fff', className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3633 0H2.63672C1.18295 0 0 1.18295 0 2.63672V15.3633C0 16.817 1.18295 18 2.63672 18H7.94531V11.6367H5.83594V8.47266H7.94531V6.32812C7.94531 4.58336 9.36461 3.16406 11.1094 3.16406H14.3086V6.32812H11.1094V8.47266H14.3086L13.7812 11.6367H11.1094V18H15.3633C16.817 18 18 16.817 18 15.3633V2.63672C18 1.18295 16.817 0 15.3633 0Z" fill={fill} />
    </svg>
  )
}