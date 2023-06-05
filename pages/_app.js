import { ThemeProvider } from "next-themes";
import '../styles/global.css'
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  return (
 <ThemeProvider attribute="class">

  <I18nextProvider i18n={i18n}>
    <Component {...pageProps} />
  </I18nextProvider>
</ThemeProvider>


  );
}

export default MyApp;
