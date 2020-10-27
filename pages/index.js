import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';
const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Bitcoin prices</h1>
      <p>Check current Bitcoin rates</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const API_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  const res = await fetch(API_URL);
  const data = await res.json();
  return {
    bpi: data.bpi,
  };
};

export default Index;
