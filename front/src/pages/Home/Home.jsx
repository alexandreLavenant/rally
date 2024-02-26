
import { useEffect, useState } from 'react';

import Geo from '../../components/Geo/Geo';
import Profile from '../../components/Profile/Profile';
import Ranking from '../../components/Ranking/Ranking';

const defaultTeams = [
  {
    name: 'Team 1',
    points: 235
  },
  {
    name: 'Team 2',
    points: 126
  },
  {
    name: 'Team 3',
    points: 50
  },
  {
    name: 'Team 4',
    points: 20
  }
];

const Home = () => {
  const [teams, setTeams] = useState(defaultTeams);

  const fetchTeams = async() => {
    const response = await fetch('http://localhost:4000/api/teams');
    const teams = await response.json();
    if (teams.length > 0) {
      setTeams(teams);
    }
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <Geo/>
      {
        teams.length > 0 && <Profile team={teams[0]} />
      }
      <Ranking teams={teams} />
    </div>
  );
}

export default Home;
