import { useQuiz } from '../contexts/AppContext';

function Progress() {
  const { numQuestions, index, points, answer, maxPoints } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{' '}
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>

      <p>
        <strong>{points}</strong>/{maxPoints} Points
      </p>
    </header>
  );
}

export default Progress;
