import React from 'react';

type Props = {
    className: string;
}

const IconDel = ({ className }: Props) => {
  return (
    <svg className={className} width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.66667 3.49996V3.03329C8.66667 2.3799 8.66667 2.0532 8.54859 1.80364C8.44473 1.58411 8.279 1.40564 8.07516 1.29379C7.84342 1.16663 7.54006 1.16663 6.93333 1.16663H6.06667C5.45994 1.16663 5.15658 1.16663 4.92484 1.29379C4.721 1.40564 4.55527 1.58411 4.45141 1.80364C4.33333 2.0532 4.33333 2.3799 4.33333 3.03329V3.49996M5.41667 6.70829V9.62496M7.58333 6.70829V9.62496M1.625 3.49996H11.375M10.2917 3.49996V10.0333C10.2917 11.0134 10.2917 11.5034 10.1146 11.8778C9.95876 12.2071 9.71016 12.4748 9.4044 12.6426C9.0568 12.8333 8.60175 12.8333 7.69167 12.8333H5.30833C4.39825 12.8333 3.94321 12.8333 3.5956 12.6426C3.28984 12.4748 3.04124 12.2071 2.88545 11.8778C2.70833 11.5034 2.70833 11.0134 2.70833 10.0333V3.49996" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default IconDel;