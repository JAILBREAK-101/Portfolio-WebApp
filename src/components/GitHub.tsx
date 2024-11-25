// import { getGitHubActivity } from '../lib/github';

interface GitHubProps {
  activities: [
    activity: {
      description: string;
    }
  ];
}

export default function GitHub({ activities }: GitHubProps) {
  return (
    <div style={{color: "whitesmoke", textAlign: "center"}}>
      <h1>My GitHub Activity</h1>
      <ul className=''>
        {activities.map((activity, index) => (
          <li key={index}>
            {/* <p>{activity.description}</p> */}
          </li>
        ))}
      </ul>

      <div style={{
        background: "white",
        color: "black",
        padding: "1rem",
        display: "flex",
        fontSize: "24px",
        textAlign: "center"
      }}>
        Page Under Construction
      </div>
    </div>
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
