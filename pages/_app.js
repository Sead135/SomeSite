import React, {useState} from 'react';
import Head from 'next/head';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";
import {wrapper} from "../store";
import {useSelector} from "react-redux";
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const {selectTheme} = useSelector(state => state.selectTheme)

    const theme = createTheme({
        palette: {
            mode: selectTheme === 'light' ? 'light' : 'dark',
            primary: {
                main: '#FD9D2E',
            },
            secondary: {
                main: '#D7485A',
            },
            neutral: {
                light: "#F0F0F0",
                main: "#F0F0F0",
                dark: "#191919",
            },
            text: {
                light: "#191919",
                main: "#191919",
                dark: "#F0F0F0",
            },
        },
    });

  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp)