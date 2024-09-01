// (YouTube channel embed page)
import Layout from '../components/Layout';

export default function YouTube() {
  return (
    <Layout>
      <h1>My YouTube Channel</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_CHANNEL_ID"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Layout>
  );
}
