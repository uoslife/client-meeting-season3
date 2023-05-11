import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export const getInitialProps = async (
  ctx: DocumentContext,
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="noop">
          {initialProps.styles}
          {sheet.getStyleElement()}
        </React.Fragment>,
      ],
    };
  } finally {
    sheet.seal();
  }
};

const BaseDocument: React.FC = () => (
  <Html lang="ko">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default BaseDocument;
