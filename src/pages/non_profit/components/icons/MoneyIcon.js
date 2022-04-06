import React from 'react';

export function MoneyIcon({ fill = '#3C7157', className }) {
  return (
    <svg className={className} width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0V14H22V0H0ZM20 12H2V2H20V12ZM11 10C11.5933 10 12.1734 9.8241 12.6667 9.4944C13.1601 9.1648 13.5446 8.6962 13.7716 8.1481C13.9987 7.5999 14.0581 6.9967 13.9424 6.4147C13.8266 5.8328 13.5409 5.2982 13.1213 4.87868C12.7018 4.45912 12.1672 4.1734 11.5853 4.05764C11.0033 3.94189 10.4001 4.0013 9.8519 4.22836C9.3038 4.45542 8.83524 4.83994 8.50559 5.3333C8.17595 5.8266 8 6.4067 8 7C8 7.7956 8.31607 8.5587 8.87868 9.1213C9.4413 9.6839 10.2044 10 11 10ZM11 5.8C11.2373 5.8 11.4693 5.8704 11.6667 6.0022C11.864 6.1341 12.0178 6.3215 12.1087 6.5408C12.1995 6.7601 12.2232 7.0013 12.1769 7.2341C12.1306 7.4669 12.0164 7.6807 11.8485 7.8485C11.6807 8.0164 11.4669 8.1306 11.2341 8.1769C11.0013 8.2232 10.7601 8.1995 10.5408 8.1087C10.3215 8.0178 10.1341 7.864 10.0022 7.6667C9.8704 7.4693 9.8 7.2373 9.8 7C9.8003 6.6818 9.9269 6.3768 10.1519 6.1519C10.3768 5.9269 10.6818 5.8003 11 5.8Z" fill={fill} />
    </svg>
  )
}