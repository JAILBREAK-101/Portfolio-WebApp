// (GitHub activities page)
import Dashboard from '.';
// import { getGitHubActivity } from '../lib/github';

export default function GitHub({ activities }) {
  return (
    <Dashboard>
      <h1>My GitHub Activity</h1>
      <ul className=''>
        {activities.map((activity, index) => (
          <li key={index}>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </Dashboard>
  );
}

const getGitHubActivity = async () => {
  return [
    {
      description: "Building solutions"
    }
  ];
}

export async function getServerSideProps() {
  const activities = await getGitHubActivity(); 
  return { props: { activities } };
}
