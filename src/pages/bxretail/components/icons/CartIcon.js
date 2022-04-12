import React from 'react';

export function CartIcon({ fill = '#fff', className }) {
    return (
        <svg className={className} width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1080.000000, -12.000000)">
                    <g id="Group" transform="translate(1081.000000, 13.000000)">
                        <path d="M0,0 L2.34417469,0 C2.69234433,0 2.99495026,0.266017104 3.07633649,0.643488013 L5.00541,9.15147904 C5.11287753,9.64916585 5.51195284,10 5.97073234,10 L15.7370794,10 C16.1660068,10 16.5462282,9.69262582 16.6804055,9.23839899 L17.9385926,4.1136268 C18.1519564,3.55320342 17.7830475,2.93214636 17.2375398,2.93214636 L12.322943,2.93214636" stroke={fill} strokeWidth="1.2" strokeLinecap="round"></path>
                        <path d="M14,13.5 C14,14.3282076 14.671432,15 15.5,15 C16.3282076,15 17,14.3282076 17,13.5 C17,12.671432 16.3282076,12 15.5,12 C14.671432,12 14,12.671432 14,13.5" fill={fill}></path>
                        <path d="M6,13.5 C6,14.3282076 6.67179241,15 7.5,15 C8.328568,15 9,14.3282076 9,13.5 C9,12.671432 8.328568,12 7.5,12 C6.67179241,12 6,12.671432 6,13.5" fill={fill}></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}