import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script data-ad-client="ca-pub-4792845809342776" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <link rel="shortcut icon" href="rand-logo.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}