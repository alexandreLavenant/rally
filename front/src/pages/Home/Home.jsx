
import Geo from '../../components/Geo/Geo';
import Profile from '../../components/Profile/Profile';
import Ranking from '../../components/Ranking/Ranking';

const teams = [
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
  return (
    <div>
      <Geo/>
      <Profile team={teams[0]} />
      <Ranking teams={teams} />
    </div>
  );
}

export default Home;
