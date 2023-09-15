import React from 'react';
import { ITopPageProps } from './TopPageComponent.props';

const TopPageComponents = ({ page }: ITopPageProps): JSX.Element => {
    return (
        <>{page?.category && page.category}</>
    );
};

export default TopPageComponents;
