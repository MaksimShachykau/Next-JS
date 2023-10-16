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
import TopPageComponents from '@/pages-component/TopPageComponent';
import Head from 'next/head';

const TopPage = ({ page, firstCategory, products }: ITopPageProps):JSX.Element => {

  return (
    <>
      <Head>
        <title>{page?.metaTitle}</title>
        <meta name='description' content={page?.metaDescription}/>
        <meta property='og:title' content={page?.metaTitle}/>
        <meta property='og:description' content={page?.metaDescription}/>
        <meta property='og:article' content={'article'}/>
      </Head>
      <TopPageComponents
        page={page}
        firstCategory={firstCategory}
        products={products}
      />
    </>
  );
};

export default withLayout(TopPage);

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

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

interface ITopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
  page: ITopPageModel;
  products: IProductModel[]
}