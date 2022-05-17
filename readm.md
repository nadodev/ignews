- Iniciar o projeto
> yarn create next-app --typescript

- importar o AppProps de "next/app" e definir como exemplo abaixo.

> import { AppProps } from "next/app";
>
> function MyApp({ Component, pageProps }: AppProps) {
>  return <Component {...pageProps} />
> }
> export default MyApp;
 
<!-- yarn add typescript @types/react @types/node -D -->
- adicionar o sass 
> yarn add sass

## Devemos criar um arquivo _document.tsx

- nesse arquivo vai ser importa o html que queremos excutar uma só vez, e importamos os estilos da fonte no _document.tsx

- Criar estilos Globais
> 


## Parei Curso no modulo 1 , no video , configurando fonte externa