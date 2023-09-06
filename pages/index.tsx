import Head from 'next/head';
import HTag from '@/components/HTag';
import Button from '@/components/Button';
import P from '@/components/P';
import Tag from '@/components/Tag';
import Rating from '@/components/Rating';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HTag tag='h1'>Hello World</HTag>
        <Button appearance='primary' arrow='down'>Primary button</Button>
        <Button appearance='ghost' arrow='right'>Ghost button</Button>
        <P size='s'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae neque expedita debitis exercitationem! Deserunt, quibusdam? Dicta, facere! In, totam veritatis? Assumenda ex perferendis quos, autem necessitatibus et iusto qui iure.</P>
        <P size='m'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae neque expedita debitis exercitationem! Deserunt, quibusdam? Dicta, facere! In, totam veritatis? Assumenda ex perferendis quos, autem necessitatibus et iusto qui iure.</P>
        <P size='l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae neque expedita debitis exercitationem! Deserunt, quibusdam? Dicta, facere! In, totam veritatis? Assumenda ex perferendis quos, autem necessitatibus et iusto qui iure.</P>
        <Tag size='s'>Hello world tag</Tag>
        <Tag size='s' color='red'>Hello world tag</Tag>
        <Tag size='s' color='primary' href='#'>Hello world tag</Tag>
        <Tag size='s' color='ghost'>Hello world tag</Tag>
        <Tag size='m' color='grey'>Hello world tag</Tag>
        <Tag size='m' color='green'>Hello world tag</Tag>

        <Rating rating={4} />
      </main>
    </>
  );
}
