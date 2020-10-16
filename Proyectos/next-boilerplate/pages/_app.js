import GlobalStyle from '../constants/globalStyle';
import { Layout } from 'containers';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
