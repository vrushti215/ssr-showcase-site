import Layout from "../components/Layout";

export default function ZollNews() {
  return (
    <Layout title="Zoll News">
      <h2 className="text-2xl font-bold mb-4">Zoll News</h2>
      <p>Server-side content related to Zoll news and updates.</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
