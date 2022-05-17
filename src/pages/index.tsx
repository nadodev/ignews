import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";


 interface Props {
    id: number;
    name: string;
 }
interface HomeProps {
  product: {
    priceId: string;
    ammount: number;
  };

  resposta: [Props]

}

export default function Home({ product, resposta }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Home - Ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <br /> <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.ammount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="girl codding" />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KEdDuDf2bC0sNGKSrCvnMSa");

  const product = {
    priceId: price.id,
    ammount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  const getUser = async () => {
    const resposta = await fetch("http://localhost:3000/api/user").then((res) =>  res.json())
    return resposta;
  };

  const resposta = await getUser();
  
  return {
    props: {
      product,
      resposta
     
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
