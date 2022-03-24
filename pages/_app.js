import { Fragment } from 'react';
import Head from 'next/head';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
