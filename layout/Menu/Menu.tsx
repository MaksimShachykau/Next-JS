import React, { useContext, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { IPageItem } from '@/Interfaces/menu.interface';
import { AppContext } from '@/context/app.context';

import styles from './Menu.module.css';
import { firstLevelMenu } from '@/helpers/helpers';
import { motion } from 'framer-motion';

const variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
};


const variantsChildren = {
  visible: {
    opacity: 1,
    height: 35
  },

  hidden: {
    opacity: 0,
    height: 0,
  }
};

const Menu = ():JSX.Element => {
    const { firstCategory, menu, setMenu } = useContext(AppContext);
    const router = useRouter();

    const setIsOpenMenu = (secondCategory: string) => {
      setMenu && setMenu(menu.map(m => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened;
        }
        return m;
      }));
    };

    const setIsOpenMenuKey = (key: KeyboardEvent, secondCategory: string) => {
      if(key.code === 'Space' || key.code === 'Enter') {
        key.preventDefault();
        setIsOpenMenu(secondCategory);
      }
    };

    const FirstLevelMenu = ():JSX.Element => {
      return (
        <ul className={styles['TopLevel']}>{
          firstLevelMenu.map(menu => (
            <li key={menu.route}>
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
            </li>
          ))
        }</ul>
      );
    };

    const SecondLevelMenu = ({ route }: {route: string}):JSX.Element => {
      return(
        <ul className={styles['secondBlock']}>
          { menu.map(m => {
            if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
              m.isOpened = true;
            }
            return (
              <div key={m._id.secondCategory} className={styles['secondBlockWrapper']}>
                <li
                  tabIndex={0}
                  className={cn(styles['secondLevel'], { [styles['secondLevelActive']]: m.isOpened })}
                  onClick={() => setIsOpenMenu(m._id.secondCategory)}
                  onKeyDown={(key: KeyboardEvent) => setIsOpenMenuKey(key, m._id.secondCategory)}
                >
                  {m._id.secondCategory}
                </li>
                <motion.ul
                  layout
                  variants={variants}
                >
                  {m.isOpened && getCategory(route, m.pages)}
                </motion.ul>
              </div>
            );
          })}
        </ul>
      );
    };

    const getCategory = (route: string, pages: IPageItem[]) => {
      return (
            pages.map(p => (
              <motion.li
                variants={variantsChildren}
                key={p._id}
              >
                <Link
                  href={`/${route}/${p.alias}`}
                  className={cn(styles['thirdLevel'], {
                    [styles['thirdLevelActive']]: `/${route}/${p.alias}` === router.asPath
                  })}
                >
                  {p.category}
                </Link>
              </motion.li>
            ))
      );
    };

    return (
      <>
        <FirstLevelMenu />
      </>
    );
};

export default Menu;
