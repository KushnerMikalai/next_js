import 'modern-normalize'
import '../styles/_colors.css'
import '../styles/globals.css'
import {
    initializeIcons,
} from '@fluentui/react';
import { Provider as ProviderAuth } from 'next-auth/client'
import App, { AppProps, AppContext } from 'next/app'
import { getSession } from 'next-auth/client'
import { wrapper } from '../store'
import Layout from '../components/Layout'

interface MyAppProps extends AppProps {}

initializeIcons();
class WrappedApp extends App<MyAppProps> {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const session = await getSession(ctx)
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {session}

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <ProviderAuth
                options={{
                    clientMaxAge: 0,
                    keepAlive: 0,
                }}
                session={pageProps.session}
            >
                <Layout session={pageProps.session}>
                    <Component {...pageProps} />
                </Layout>
            </ProviderAuth>
        )
    }
}

export default wrapper.withRedux(WrappedApp)
