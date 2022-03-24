import Head from 'next/head';

export const setTitle = (title) => (
    <Head>
        <title>Quartenion | {title}</title>
    </Head>
);
