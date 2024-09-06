// (YouTube channel embed page)
import Dashboard from ".";

export default function YouTube() {
  return (
    <Dashboard>
      <h1>My YouTube Channel</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/@Genix-Js"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Dashboard>
  );
}
