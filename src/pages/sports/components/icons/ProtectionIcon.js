import React from 'react';

export function ProtectionIcon({ fill = '#F35811', className }) {
  return (
    <svg className={className} width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 5.15064L32 10.6932V23.12C31.9952 26.2788 31.1616 29.3808 29.5822 32.1164C28.0028 34.852 25.7332 37.125 23 38.7084L18 41.5942L13 38.7074C10.267 37.1242 7.99736 34.8512 6.418 32.1158C4.83864 29.3806 4.00488 26.2786 4 23.12V10.6932L18 5.15064ZM18 0.848633L0 7.97464V23.12C0.00586 26.9806 1.02486 30.7722 2.95518 34.1156C4.8855 37.459 7.65952 40.2372 11 42.1726L18 46.2128L25 42.1718C28.3404 40.2366 31.1144 37.4584 33.0446 34.1152C34.975 30.7718 35.994 26.9806 36 23.12V7.97464L18 0.848633Z" fill={fill} />
    </svg>
  )
}