import React from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import withLayout from '@/layout/Layout';

import { API } from '@/helpers/api';

import { IMenuItem } from '@/Interfaces/menu.interface';
import { ParsedUrlQuery } from 'querystring';
import { ITopPageModel } from '@/Interfaces/page.interface';
import { IProductModel } from '@/Interfaces/product.interface';

const firstCategory = 0;

const Home = ({ page }: ICourseProps):JSX.Element => {

  return (
    <>{page?.category && page.category}</>
  );
};

export default withLayout(Home);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory });

    return {
        paths: menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`)),
        fallback: true
    };

};
export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
        notFound: true
    };
  }

  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory });
  const { data: page } = await axios.get<ITopPageModel>(`${API.topPage.byAlias}${params.alias}`);
  const { data: products } = await axios.post<IProductModel[]>(API.product.find, {
    category: page.category,
    limit: 5
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  };
};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory?: number;
  page: ITopPageModel;
  products: IProductModel[]
}