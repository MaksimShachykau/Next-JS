import React from 'react';
import { useReducer } from 'react';

import { ITopPageProps } from './TopPageComponent.props';
import HTag from '@/components/HTag';
import Tag from '@/components/Tag';
import HhData from '@/components/HhData';
import Advantages from '@/components/Advantages/Advantages';
import SkillBlock from '@/components/SkillsBlock';

import { TopLevelCategory } from '@/Interfaces/page.interface';

import { sortReducer } from '@/components/Sort/sort.reducer';
import { SortEnum } from '@/components/Sort/Sort.props';
import Sort from '@/components/Sort';
import Product from '@/components/Product';

import styles from './TopPageComponent.module.css';


const TopPageComponents = ({ page, products, firstCategory }: ITopPageProps): JSX.Element => {
    const[{products: sortedProducts, sort}, dispatchProducts] = useReducer(sortReducer, { products, sort: SortEnum.ByRate });

    const sortProducts = (sort: SortEnum) => {
        dispatchProducts({type: sort});
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                {page && <HTag tag='h2'>{page.title}</HTag>}
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={sortProducts}/>
            </div>
            {sortedProducts && (
                <ul>
                    {sortedProducts.map(e => <Product key={e._id} product={e} />)}
                </ul>
            )}
            {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} category={page.category} />}
            { page &&
                <>
                    {page.advantages.length && <Advantages advantages={page.advantages}/>}
                    <SkillBlock categories={page.tags}/>
                    { page.seoText && <div className={styles['seo']} dangerouslySetInnerHTML={ { __html: page.seoText } }/> }

                </>
            }
        </div>
    );
};

export default TopPageComponents;
