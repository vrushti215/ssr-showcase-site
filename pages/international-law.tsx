import Layout from "../components/Layout";

export default function InternationalLaw() {
  return (
    <Layout title="International Law">
      <h2 className="text-2xl font-bold mb-4">International Law</h2>
      <p>Content for international legal services, served from the server.</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
