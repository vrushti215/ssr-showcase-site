import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title} | SSR Showcase</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
