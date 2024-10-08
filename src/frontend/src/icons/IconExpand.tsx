
import React, { MouseEventHandler } from 'react';

type Props = {
    className: string;
    onClick: MouseEventHandler,
}

const IconExpand = ({ className, onClick }: Props) => {
  return (
    <svg className={className} onClick={onClick} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default IconExpand
