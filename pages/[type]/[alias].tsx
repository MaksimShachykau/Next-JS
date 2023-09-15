import React from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import withLayout from '@/layout/Layout';

import { API } from '@/helpers/api';

import { IMenuItem } from '@/Interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import { ITopPageModel } from '@/Interfaces/page.interface';
import { IProductModel } from '@/Interfaces/product.interface';
import { firstLevelMenu } from '@/helpers/helpers';

const Home = ({ page }: ICourseProps):JSX.Element => {

  return (
    <>{page?.category && page.category}</>
  );
};

export default withLayout(Home);

export const getStaticPaths: GetStaticPaths = async () => {

  let paths: string[] = [];

  for(const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {firstCategory: m.id});

    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }
  for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
			firstCategory: m.id
		});
		paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
	}
  return {
      paths,
      fallback: true
  };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
        notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(e => e.route === params.type);
  if(!firstCategoryItem) {
    return {
        notFound: true
    };
  }
  try {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory: firstCategoryItem.id });
    const { data: page } = await axios.get<ITopPageModel>(`${API.topPage.byAlias}${params.alias}`);
    const { data: products } = await axios.post<IProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
  page: ITopPageModel;
  products: IProductModel[]
}