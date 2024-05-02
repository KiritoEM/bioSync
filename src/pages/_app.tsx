import type { AppProps } from "next/app";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../configs/i18n_config";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
