
import { useEffect, useState } from 'react';

import Geo from '../../components/Geo/Geo';
import Profile from '../../components/Profile/Profile';
import Ranking from '../../components/Ranking/Ranking';

const Home = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async() => {
    const response = await fetch('http://localhost:4000/api/teams');
    const teams = await response.json();
    setTeams(teams);
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
