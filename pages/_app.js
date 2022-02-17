import { GlobalStyle } from "../src/styles/global";
import './_app.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
