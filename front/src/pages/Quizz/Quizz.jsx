import { useState } from 'react';
import './quizz.scss';

const Quizz = () => {
  const [quizz, setQuizz] = useState([]);

  const fetchQuizz = async() => {
    const response = await fetch(`http://localhost:4000/api/quizz`);
    console.log(response);
    const quizz = await response.json();
    setQuizz(quizz);
  }

  fetchQuizz();

  return (
    <div>
      <h1>{quizz.name}</h1>
      {
        quizz.questions.map((item) => (
          <div key={item.label}>
            <label>{ item.question }</label>
            <input type="text" />
          </div>
        ))
      }

      <div>
        <label>Quelle est la couleur du chien</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default Quizz;
