import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <h2 className="text-2xl font-bold mb-4">Welcome to the SSR Showcase Site</h2>
      <p>This site demonstrates server-side rendering using Next.js and Tailwind CSS.</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
