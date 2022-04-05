import React from 'react';

export function CartIcon({ fill = '#1D2922', className }) {
  return (
    <svg className={className} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 5V4C13 2.93913 12.5786 1.92172 11.8284 1.17157C11.0783 0.42143 10.0609 0 9 0C7.9391 0 6.92172 0.42143 6.17157 1.17157C5.42143 1.92172 5 2.93913 5 4V5H0V20H18V5H13ZM7 4C7 3.46957 7.2107 2.96086 7.5858 2.58579C7.9609 2.21071 8.4696 2 9 2C9.5304 2 10.0391 2.21071 10.4142 2.58579C10.7893 2.96086 11 3.46957 11 4V5H7V4ZM16 18H2V7H16V18ZM12 11.45C12.2868 11.45 12.5671 11.365 12.8056 11.2056C13.044 11.0463 13.2299 10.8198 13.3396 10.5549C13.4494 10.2899 13.4781 9.9984 13.4221 9.7171C13.3662 9.4358 13.2281 9.1775 13.0253 8.9747C12.8225 8.7719 12.5642 8.6338 12.2829 8.5779C12.0016 8.5219 11.7101 8.5506 11.4451 8.6604C11.1802 8.7701 10.9537 8.956 10.7944 9.1944C10.635 9.4329 10.55 9.7132 10.55 10C10.55 10.3846 10.7028 10.7534 10.9747 11.0253C11.2466 11.2972 11.6154 11.45 12 11.45ZM6 11.45C6.28678 11.45 6.56713 11.365 6.80558 11.2056C7.044 11.0463 7.2299 10.8198 7.3396 10.5549C7.4494 10.2899 7.4781 9.9984 7.4221 9.7171C7.3662 9.4358 7.2281 9.1775 7.0253 8.9747C6.82252 8.7719 6.56415 8.6338 6.28288 8.5779C6.00161 8.5219 5.71006 8.5506 5.44511 8.6604C5.18016 8.7701 4.9537 8.956 4.79437 9.1944C4.63504 9.4329 4.55 9.7132 4.55 10C4.55 10.3846 4.70277 10.7534 4.9747 11.0253C5.24662 11.2972 5.61544 11.45 6 11.45Z" fill={fill} />
    </svg>
  )
}