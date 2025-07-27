import Layout from "../components/Layout";

export default function OriginCertificates() {
  return (
    <Layout title="Origin Certificates">
      <h2 className="text-2xl font-bold mb-4">Origin Certificates</h2>
      <p>This page is rendered with SSR and represents origin certificates content.</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
