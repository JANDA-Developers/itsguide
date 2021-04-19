import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="ko">
                <Head >
                    <meta name="naver-site-verification" content="ee3b982604bb599adfc18c1fcf30f6987e754117" />
                    <meta httpEquiv="x-ua-compatible" content="IE=edge" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument