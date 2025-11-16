function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to react quiz</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          // console.log('button clicked');
          dispatch({ type: 'start' });
        }}
      >
        let's start
      </button>
    </div>
  );
}

export default StartScreen;
