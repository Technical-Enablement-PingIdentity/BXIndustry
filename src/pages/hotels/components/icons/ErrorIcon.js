import React from 'react';

export function ErrorIcon({ fill = '#D83135', className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00008 4.70834C8.81058 4.70834 8.62525 4.76455 8.46767 4.86985C8.31008 4.97515 8.18725 5.12482 8.11467 5.29993C8.04217 5.47505 8.02317 5.66774 8.06017 5.85363C8.09717 6.03953 8.18842 6.21029 8.32242 6.34431C8.4565 6.47834 8.62725 6.56961 8.81317 6.60659C8.999 6.64357 9.19175 6.62459 9.36683 6.55205C9.54192 6.47952 9.69158 6.35669 9.79692 6.1991C9.90225 6.0415 9.95842 5.85621 9.95842 5.66667C9.95842 5.41251 9.85742 5.16875 9.67775 4.98903C9.498 4.80931 9.25425 4.70834 9.00008 4.70834ZM9.00008 0.666672C7.35192 0.666672 5.74074 1.15541 4.37033 2.07109C2.99992 2.98677 1.93182 4.28825 1.30109 5.81098C0.670357 7.33367 0.505332 9.00925 0.826874 10.6258C1.14842 12.2423 1.94209 13.7271 3.10753 14.8926C4.27297 16.058 5.75782 16.8517 7.37433 17.1733C8.99083 17.4948 10.6664 17.3298 12.1891 16.699C13.7118 16.0683 15.0133 15.0002 15.929 13.6298C16.8447 12.2593 17.3334 10.6482 17.3334 9C17.3334 7.90567 17.1178 6.82202 16.6991 5.81098C16.2803 4.79993 15.6665 3.88127 14.8927 3.10745C14.1188 2.33363 13.2002 1.7198 12.1891 1.30101C11.1781 0.882222 10.0944 0.666672 9.00008 0.666672ZM9.00008 15.6667C7.68158 15.6667 6.39262 15.2757 5.29628 14.5432C4.19996 13.8106 3.34547 12.7694 2.84089 11.5513C2.33631 10.3331 2.20428 8.99259 2.46152 7.69942C2.71875 6.4062 3.35369 5.21831 4.28604 4.28596C5.21839 3.35361 6.40627 2.71867 7.6995 2.46144C8.99267 2.2042 10.3332 2.33622 11.5513 2.84081C12.7695 3.3454 13.8107 4.19987 14.5433 5.29621C15.2758 6.39253 15.6668 7.68142 15.6668 9C15.6648 10.7675 14.9618 12.462 13.7119 13.7118C12.4621 14.9617 10.7676 15.6647 9.00008 15.6667ZM8.20842 13.1667H9.79175V7.75H8.20842V13.1667Z" fill={fill} />
    </svg>
  )
}