import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '@/redux/store';
import { appWithTranslation } from '@/i18n';
import GlobalStyle from '@/components/GlobalStyle';
import theme from '@/theme/theme.json';
import Head from 'next/head';
import { Loading } from '@/components/UIKit';
import { Router } from 'next/router';
import { useState } from 'react';
import { ConfigProvider } from 'antd';

const validateMessages = {
  required: '${label} is required!',
};

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });
  Router.events.on('routeChangeError', () => {
    setLoading(false);
  });

  return (
    <>
      <Head>
        <title>Smartos Client</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ConfigProvider form={{ validateMessages }}>
          <GlobalStyle />
          <Loading loading={loading} />
          <Component {...pageProps} />
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
