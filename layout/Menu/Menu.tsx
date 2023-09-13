import React, { useContext } from 'react';
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
    const { firstCategory, menu } = useContext(AppContext);
    const FirstLevelMenu = ():JSX.Element => {
      return (
        <>{
          firstLevelMenu.map(menu => (
            <div key={menu.route}>
              <a href={`/${menu.route}`}
                className={cn(styles['firstLevelMenu'],
                  {
                    [styles['firstLevelMenuActive']]: menu.id === firstCategory,
                  }
                )}
              >
                {menu.icon} <div className={styles['name']}>{menu.name}</div>
              </a>
              {menu.id === firstCategory && <SecondLevelMenu route={menu.route} />}
            </div>
          ))
        }</>
      );
    };

    const SecondLevelMenu = ({ route }: {route: string}):JSX.Element => {
      return(
        <div className={styles['secondBlock']}>{
          menu.map(m => (
            <div key={m._id.secondCategory} className={styles['secondBlockWrapper']}>
              <div className={cn(styles['secondLevel'],
                {
                  [styles['secondLevelActive']]: m.isActive
                }
              )}>
                {m._id.secondCategory}
              </div>
              <div>
                { m.isActive && <ThirdCategory route={route} pages={m.pages} /> }
              </div>
            </div>
          ))
        }</div>
      );
    };

    const ThirdCategory = ({ route, pages }: {route: string, pages: IPageItem[]}):JSX.Element => {
      return (
        <>
          {
            pages.map(p => (
              <a className={styles['thirdLevel']} key={p._id} href={`/${route}/${p.alias}`}>{p.category}</a>
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
