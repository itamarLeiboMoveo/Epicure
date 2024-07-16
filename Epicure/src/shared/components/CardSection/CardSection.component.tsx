import React, { Children } from 'react';
import SectionButton from './components/SectionButton/SectionButton.component.tsx';
import { CardTableProps } from './CardSection.types.ts';

import './CardSection.style.scss';


const CardTable: React.FC<CardTableProps> = ({
    title,
    children
}) => {

    return (
        <div>
            <h1 className='title'>{title}</h1>
            <div className='table'>
                {children}
            </div>
            <SectionButton />
        </div>

    );
};

export default CardTable;