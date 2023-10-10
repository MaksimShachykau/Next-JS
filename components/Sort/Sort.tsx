import { KeyboardEvent } from 'react';
import cn from 'classnames';
import { ISortProps, SortEnum } from "./Sort.props";
import SortIcon from './Sort.svg';

import styles from './Sort.module.css';

const Sort = ({ sort, setSort, className, ...props }: ISortProps):JSX.Element => {
    const sortByKey = (key: KeyboardEvent, sortEnum: SortEnum) => {
        if(key.code === 'Enter' || key.code === 'Space') {
            key.preventDefault();
            setSort(sortEnum);
        }
    };

    return(
        <div className={cn(styles.sort, className)} {...props}>
            <span
                tabIndex={0}
                onKeyDown={(k: KeyboardEvent) => sortByKey(k, SortEnum.ByRate)}
                onClick={() => setSort(SortEnum.ByRate)}
                className={cn(styles['sortBy'], {
                    [styles['isActive']]: sort === SortEnum.ByRate
                })}
                aria-selected={sort === SortEnum.ByRate}
            >
                <SortIcon/>by&nbsp;rating
            </span>
            <span
                tabIndex={0}
                onKeyDown={(k: KeyboardEvent) => sortByKey(k, SortEnum.byPrice)}
                onClick={() => setSort(SortEnum.byPrice)}
                className={cn(styles['sortBy'], {
                    [styles['isActive']]: sort === SortEnum.byPrice
                 })}
                 aria-selected={sort === SortEnum.byPrice}
            >
                <SortIcon/>by&nbsp;price
            </span>
        </div>
    );
};

export default Sort;
