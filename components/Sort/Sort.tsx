import cn from 'classnames';
import { ISortProps, SortEnum } from "./Sort.props";
import SortIcon from './Sort.svg';

import styles from './Sort.module.css';

const Sort = ({ sort, setSort, className, ...props }: ISortProps):JSX.Element => {
    return(
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.ByRate)}
                className={cn(styles['sortBy'], {
                    [styles['isActive']]: sort === SortEnum.ByRate
                })}
            >
                <SortIcon/>by&nbsp;rating
            </span>
            <span
                onClick={() => setSort(SortEnum.byPrice)}
                className={cn(styles['sortBy'], {
                    [styles['isActive']]: sort === SortEnum.byPrice
                 })}
            >
                <SortIcon/>by&nbsp;price
            </span>
        </div>
    );
};

export default Sort;
