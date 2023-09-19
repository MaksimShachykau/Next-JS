import React from 'react';
import { ITopPageProps } from './TopPageComponent.props';
import HTag from '@/components/HTag';
import Tag from '@/components/Tag';
import HhData from '@/components/HhData';
import Advantages from '@/components/Advantages/Advantages';
import SkillBlock from '@/components/SkillsBlock';

import { TopLevelCategory } from '@/Interfaces/page.interface';

import styles from './TopPageComponent.module.css';


const TopPageComponents = ({ page, products, firstCategory }: ITopPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                {page && <HTag tag='h2'>{page.title}</HTag>}
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <div>sort component</div>
            </div>
            {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} category={page.category} />}
            { page &&
                <>
                    {page?.advantages.length && <Advantages advantages={page.advantages}/>}
                    <SkillBlock categories={page.tags}/>
                </>
            }
        </div>
    );
};

export default TopPageComponents;
