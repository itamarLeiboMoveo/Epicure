import React, { Children } from 'react';
import SectionButton from './components/SectionButton/SectionButton.component.tsx';
import { CardTableProps } from './CardSection.types.ts';

import './CardSection.style.scss';


const CardTable: React.FC<CardTableProps> = ({
    title,
    isChefsRestaurants,
    children
}) => {
    const titleClassName = isChefsRestaurants ? 'title chefs-restaurants-title' : 'title';
    const tableClassName = isChefsRestaurants ? 'table chefs-restaurants-table' : 'table';

    return (
        <div className='cardsection-container'>
            <h1 className={titleClassName}>{title}</h1>
            <div className={tableClassName}>
                {children}
            </div>
            <SectionButton />
        </div>

    );
};

export default CardTable;