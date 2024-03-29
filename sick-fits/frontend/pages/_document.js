import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    static getInitialProps({ renderPage }){
        const sheet = new ServerStyleSheet();
        const page= renderPage(App => (props) => { return sheet.collectStyles(<App {...props} />)});
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render (){
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}