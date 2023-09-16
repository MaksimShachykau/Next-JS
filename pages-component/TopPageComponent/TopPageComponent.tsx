import React from 'react';
import { ITopPageProps } from './TopPageComponent.props';
import HTag from '@/components/HTag';
import Tag from '@/components/Tag';

import styles from './TopPageComponent.module.css';
import HhData from '@/components/HhData';

const TopPageComponents = ({ page, products }: ITopPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HTag tag='h2'>{page.title}</HTag>
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <div>sort component</div>
            </div>
            <HhData {...page.hh} category={page.category} />
        </div>
    );
};

export default TopPageComponents;
