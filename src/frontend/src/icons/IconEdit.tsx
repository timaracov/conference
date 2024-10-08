import React from 'react';

type Props = {
    className: string;
}

const IconEdit = ({ className }: Props) => {
  return (
    <svg className={className} width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.49999 7.49997H7.87499M1.125 7.49996H1.75295C1.9364 7.49996 2.02812 7.49996 2.11443 7.47924C2.19096 7.46087 2.26412 7.43056 2.33122 7.38944C2.40691 7.34306 2.47177 7.2782 2.60148 7.14849L7.31251 2.43746C7.62317 2.1268 7.62317 1.62312 7.31251 1.31246C7.00185 1.0018 6.49817 1.0018 6.18751 1.31246L1.47647 6.02349C1.34676 6.1532 1.2819 6.21806 1.23552 6.29375C1.1944 6.36085 1.1641 6.43401 1.14572 6.51054C1.125 6.59686 1.125 6.68858 1.125 6.87202V7.49996Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default IconEdit;