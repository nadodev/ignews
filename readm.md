yarn add typescript @types/react @types/node -D

importar o AppProps de "next/app" e definir como exemplo abaixo.

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

## Parei Curso no modulo 1 , no video , configurando fonte externa