import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { IFirstLevelMenu, IPageItem } from '@/Interfaces/menu.interface';
import { AppContext } from '@/context/app.context';
import { TopLevelCategory } from '@/Interfaces/page.interface';

import CoursesSvg from './icons/Courses.svg';
import BooksSvg from './icons/Books.svg';
import ServicesSvg from './icons/Services.svg';
import ProductsSvg from './icons/Courses.svg';

import styles from './Menu.module.css';

const firstLevelMenu: IFirstLevelMenu[] = [
  { route: 'courses', name: 'Courses', id: TopLevelCategory.Courses, icon: <CoursesSvg/> },
  { route: 'services', name: 'Services', id: TopLevelCategory.Services, icon: <ServicesSvg/> },
  { route: 'books', name: 'Books', id: TopLevelCategory.Books, icon: <BooksSvg/> },
  { route: 'products', name: 'Products', id: TopLevelCategory.Products, icon: <ProductsSvg/> }
];

const Menu = ():JSX.Element => {
    const { firstCategory, menu, setMenu } = useContext(AppContext);
    const router = useRouter();

    const setIsOpenMenu = (secondCategory: string) => {
      setMenu && setMenu(menu.map(m => {
        if(m._id.secondCategory === secondCategory) {
          m.isActive = !m.isActive;
        }
        return m;
      }));
    };

    const FirstLevelMenu = ():JSX.Element => {
      return (
        <>{
          firstLevelMenu.map(menu => (
            <div key={menu.route}>
              <Link href={`/${menu.route}`}
                className={cn(styles['firstLevelMenu'],
                  {
                    [styles['firstLevelMenuActive']]: menu.id === firstCategory,
                  }
                )}
              >
                {menu.icon} <div className={styles['name']}>{menu.name}</div>
              </Link>
              {menu.id === firstCategory && <SecondLevelMenu route={menu.route} />}
            </div>
          ))
        }</>
      );
    };

    const SecondLevelMenu = ({ route }: {route: string}):JSX.Element => {
      return(
        <div className={styles['secondBlock']}>{
          menu.map(m => {
            if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])){
              m.isActive = true;
            }
            return (
              <div key={m._id.secondCategory} className={styles['secondBlockWrapper']}>
                <div
                  className={cn(styles['secondLevel'],
                    {
                      [styles['secondLevelActive']]: m.isActive
                    }
                  )}
                  onClick={() => setIsOpenMenu(m._id.secondCategory)}
                >
                  {m._id.secondCategory}
                </div>
                <div>
                  { m.isActive && <ThirdCategory route={route} pages={m.pages} /> }
                </div>
              </div>
            );
          })
        }</div>
      );
    };

    const ThirdCategory = ({ route, pages }: {route: string, pages: IPageItem[]}):JSX.Element => {
      return (
        <>
          {
            pages.map(p => (
              <Link
                key={p._id}
                href={`/${route}/${p.alias}`}
                className={cn(styles['thirdLevel'], {
                  [styles['thirdLevelActive']]: `/${route}/${p.alias}` === router.asPath
                })}
              >
                {p.category}
              </Link>
            ))
          }
        </>
      );
    };

    return (
      <>
        <FirstLevelMenu />
      </>
    );
};

export default Menu;
