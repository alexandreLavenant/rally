import './ranking.css';

const Ranking = ({ teams }) => {
  return (
    <div className="cards">
      {
        teams.map((team, index) => (
          <div className={'card ' + (index === 0  ? 'selected' : '') } key={team.name}>
            <div className="flex center">
              <p>{index + 1}</p>
              <p className="ml-sm">{team.name}</p>
            </div>
            <p className="bold">{team.points}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Ranking;
  