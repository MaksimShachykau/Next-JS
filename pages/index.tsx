import Head from 'next/head';
import HTag from '@/components/HTag';
import Button from '@/components/Button';

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
        <Button type='primary'>Primary button</Button>
        <Button type='ghost'>Ghost button</Button>
      </main>
    </>
  );
}
