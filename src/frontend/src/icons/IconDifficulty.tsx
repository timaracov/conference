import React from 'react';

type Props = {
    className: string;
}

const IconDifficulty = ({ className }: Props) => {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_36_714)">
        <path d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6M11 6C11 3.23858 8.76142 1 6 1M11 6H9.75M1 6C1 3.23858 3.23858 1 6 1M1 6H2.25M6 1V2.25M9.53921 2.5L6.74995 5.25M9.53921 9.53921L9.43727 9.43727C9.09136 9.09136 8.91841 8.91841 8.71657 8.79472C8.53763 8.68506 8.34254 8.60426 8.13846 8.55526C7.90828 8.5 7.66369 8.5 7.17451 8.50001L4.82548 8.50002C4.3363 8.50002 4.09171 8.50002 3.86153 8.55528C3.65746 8.60428 3.46238 8.68509 3.28343 8.79474C3.0816 8.91843 2.90865 9.09138 2.56275 9.43728L2.46082 9.53921M2.46082 2.5L3.32904 3.36823M7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z" stroke="#48CC4E" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_36_714">
        <rect width="12" height="12" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  );
};

export default IconDifficulty;
