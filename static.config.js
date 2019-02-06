/* eslint-disable react/jsx-filename-extension */
import path from 'path';
import React from 'react';
import { Html, Head, Body, children, siteData, renderMeta } from 'react-static';

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.googletagmanager.com/gtag/js?id=UA-2176096-15" />
        <script
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-2176096-15');`,
          }}
        />
        <link
          href="http://fonts.googleapis.com/css?family=Ubuntu:400,400italic,700,700italic|Ubuntu+Condensed&amp;subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: `Miłosz Frejnik's Portfolio`,
  }),
  getRoutes: async () => {
    return [
      {
        path: '/career',
      },
    ];
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-postcss-preset-env',
    [
      'react-static-plugin-favicons',
      { inputFile: path.resolve(__dirname, 'public/milosz-face.svg') },
    ],
  ],
};
