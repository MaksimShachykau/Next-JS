import cn from 'classnames';
import { ISearchProps } from "./Search.props";

import style from './Search.module.css';
import Input from '../Input';
import Glass from './glass.svg';
import Button from '../Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

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
                <Button
                    appearance='primary'
                    className={style.button}
                    onClick={() => goToSearchPage(inputValue)}
                >
                    <Glass/>
                </Button>
        </div>
    );
};

export default Search;
