import { useState } from "react";

function App() {
 


  const questions = [
    {
      questionText: "What is the capital of Vermont?",
      answerOptions: [
        { answerText: "Burlington", isCorrect: false },
        { answerText: "Milton", isCorrect: false },
        { answerText: "Montpelier", isCorrect: true },
        { answerText: "Essex", isCorrect: false },
        { answerText: "Bristol", isCorrect: false }
      ],
    },
    {
      questionText: "Who is Darth Vader?",
      answerOptions: [
        { answerText: "Frank Oz", isCorrect: false },
        { answerText: "Anakin Skywalker", isCorrect: true },
        { answerText: "Pedro Pascal", isCorrect: false },
        { answerText: "Your Father", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which vehicle brand uses a 6 star consellation as its logo?",
      answerOptions: [
        { answerText: "Subaru", isCorrect: true },
        { answerText: "Audi", isCorrect: false },
        { answerText: "Tesla", isCorrect: false },
        { answerText: "Honda", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  // Tracks current question
  const [currentQ, setCurrentQ] = useState(0)
  // Tracks if we are displaying the score end screen or not
  const [showScore, setShowScore] = useState(false)
  // Tracks score
  const [score, setScore] = useState(0)

  // handles answer button clicks
  function handleAnswerButton(isCorrect) {
    let nextQ = currentQ + 1
    
    if(isCorrect === true){
      setScore(score +1)

    }

    if( nextQ < questions.length){

    setCurrentQ(nextQ)
  } else {
    setShowScore(true)
  }

  }

  //Handles reset button click
  function handleResetButton (){
    setCurrentQ(0)
    setShowScore(0)
    setScore(0)
  }

  return (
    <div className="App">
      {/* Ternary to render either score screen or question screen */}
      {showScore ? (
        <>
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
        <button onClick={handleResetButton}>Reset</button>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQ + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQ].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQ].answerOptions.map((eachAnswer)=> (
              <button onClick={() => handleAnswerButton(eachAnswer.isCorrect)}>{eachAnswer.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
