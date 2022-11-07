import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import Global from "../common/styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
