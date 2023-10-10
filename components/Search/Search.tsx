import cn from 'classnames';
import { ISearchProps } from "./Search.props";

import style from './Search.module.css';
import Input from '../Input';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ButtonIcon from '../ButtonIcon';

const Search = ({className, ...props}: ISearchProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const route = useRouter();

    const goToSearchPage = (value: string): void => {
        route.push({
            pathname: '/search',
            query: {
                q: value
            }
        });
    };

    return(
        <div className={cn(className, style.search)} {...props}>
                <Input
                    placeholder='Search...'
                    className={style.input}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter') {
                            goToSearchPage(inputValue);
                        }
                    }}
                />
                <ButtonIcon
                    appearance='primary'
                    icon='glass'
                    aria-label='search'
                    onClick={() => goToSearchPage(inputValue)}
                    className={style.button}
                />
        </div>
    );
};

export default Search;
