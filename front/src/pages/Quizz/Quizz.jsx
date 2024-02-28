import { useState } from 'react';
import './quizz.scss';

const defaultQuizz = {
  name: 'Quizz rally 2024',
  questions: [
    {
      label: 'Quelle est la couleur du chien ?',
      answer: 'Bleu'
    },
    {
      label: 'Quelle est la couleur du chat ?',
      answer: 'rouge'
    }
  ]
};

const Quizz = () => {
  const [quizz, setQuizz] = useState(defaultQuizz);

  const fetchQuizz = async() => {
    try {
      const response = await fetch(`http://localhost:4000/api/quizz`);
      const quizz = await response.json();
      if (quizz.name) {
        setQuizz(quizz);
      }
    } catch (error) {
      console.error(error);
    }
  }

  fetchQuizz();

  return (
    <div>
      <h1>{quizz.name}</h1>
      {
        quizz.questions.map((item) => (
          <div key={item.label}>
            <label>{ item.label }</label>
            <input type="text" />
          </div>
        ))
      }

      <button type="button">Sauvegarder les réponses</button>
    </div>
  );
}

export default Quizz;
