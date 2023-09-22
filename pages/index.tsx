import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

import withLayout from '@/layout/Layout';

import { API } from '@/helpers/api';

import Rating from '@/components/Rating';
import { IMenuItem } from '@/Interfaces/menu.interface';
import Input from '@/components/Input';

const Home = ({ firstCategory }: IHomeProps):JSX.Element => {
  const [ rating, setRating ] = useState<number>(4);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>{firstCategory}</>
        <Rating rating={rating} setRating={setRating} isEditable />
        <Input placeholder='test placeholder' />
      </main>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, { firstCategory });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[],
  firstCategory: number
}