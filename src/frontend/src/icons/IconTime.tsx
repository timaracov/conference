import React from 'react';

type Props = {
    className: string;
}

const IconTime = ({ className }: Props) => {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_36_726)">
        <path d="M6 3V6L8 7M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_36_726">
        <rect width="12" height="12" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  );
};

export default IconTime;