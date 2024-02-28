import { useEffect, useState } from 'react';
import './quizz.scss';

const defaultQuizz = {
  name: 'Quizz 2024',
  questions: [
    {
      _id: 'dzadzadzadazdazdza',
      label: 'Quelle est la couleur du chien ?',
      answer: 'Bleu'
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

  const save = async() => {
    try {
      await fetch('http://localhost:4000/api/teams/dzdadza', { method: 'PUT' });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchQuizz();
  }, []);

  return (
    <div className="container flex flex-column center">
      <form className="quizz">
        <h1 className='mb'>{quizz.name}</h1>
        {
          quizz.questions.map((item) => (
            <div key={item._id} className='flex flex-column mb-md'>
              <label>{item.label}</label>
              <input type="text" className='mt-sm'/>
            </div>
          ))
        }

        <button type="button" onClick={save}>Sauvegarder les réponses</button>
      </form>
    </div>
  );
}

export default Quizz;
